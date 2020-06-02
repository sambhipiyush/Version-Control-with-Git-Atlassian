//$('select').foundationSelect();
$(document).foundation();


var iirLvl2Title = "";

$(document).ready(function () {
    ToggleMobileMenuIcon();
    ToggleTransaction();
    if ($('.transItemsWrap').length > 0) {
        calcTransHeight();
    }
    //HoverColor();

    DetectMacSafar();

    //FilterOnLoad();

    filter();
    $('#img-load').hide();

    if (typeof setSignupMaxLength != 'undefined') {
        if (setSignupMaxLength == 1) {
            SignupSetMaxlength();
        }
    }

    if (typeof setContactUsMaxLength != 'undefined') {
        if (setContactUsMaxLength == 1) {
            ContactUsSetMaxLength();
        }
    }


    if ($('.mPortalDrop').length > 0) {
        MemberPortalMenu();
    }


    // show result6 count on Z report member RESUTLS page
    if (typeof resultCount != 'undefined') {
        ShowMemberResutlCout();
    }




    //display see more transaction in Advisory-Capital-Markets page.
    if ($('.advCapWrapper').length > 0) {
        //SeeMoreTrans();
        //display memberItem Details in Advisory & Capital Markets;
        OpenCloseMemberDetails();
    }


    //display meet more + - when open and close team section.
    if ($('.teamWrap').length > 0) {
        meetMoreTeamBtnTxt();
    }


    //control view all sectors button on Institutional Investor Research Page
    displayViewSectorBtn();

    //this add pixels to the top footer when accordieon is less for 3 items
    if ($('.faqheightfix').length > 0) {
        if ($('.leftHand .accordion li').length <= 3) {
            $('.zreportBtmBanner').css('margin-top', '11rem');
        }
    }


    if ($('.contactUsWrap').length > 0) {
        ScrollToContactMsg()
    }


    //Activate New accordion after btn view more is clicked on Member Landing page
    if ($('.btnViewMore').length > 0) {
        activateAccordion();
    }

    //Activate New accordion after btn view more is clicked on Search Results page
    if ($('.srchResultWrap').length > 0) {
        activateAccordionSrcRes();
    }


    //top fixed menu
     topFixedMenu();

    //show hide user recent serches
     if ($(".smSrchInput ").length > 0) {
         showUserRecentSearches();
     }

    $(".close-button1").click(function () {
        setTimeout(
          function () {
              if ($('#memberTrialTopMsg').is(':hidden')) {
                  topFixedMenu();
              };
          }, 500);
    });

    //fix contactusDrop msg height when on resized window
    if ($('#contactusDrop').length > 0) {
        $('#contactusDrop').on('change', function () {
            setTimeout(
              function () {
                  if ($('#contactusDrop .InfoLabel .ok').length > 0) {
                      recalcHeight('contactusDrop', 2);
                  }
              }, 1000);
        });
    }


    // save IIR page lvl2title
    if ($("#lev1Title b").length > 0) {
        iirLvl2Title = $("#lev1Title b").html();
    }

    
   

    //if ($('#contactusDrop').length > 0) {

    addScrollonResize();
    // }
    ////RegisterButton focus after submit
    //if ($('#formFocus').length > 0) {

    //    $(".RegisterButton").click(function () {
    //        $('html, body').animate({ scrollTop: $("#formFocus").offset().top }, 500);
    //    });
    //}

    /*
    if ($(this).width() < 640) {

        SeeMoreTrans();

    } else {

        displayhiddenTrans();

    }
*/


    //Play Video modal and related js
    // Gets the video src from the data-src on each button

    //var $videoSrc;
    //$('#btnPlayVideo').click(function () {
    //    alert("hi");
    //    $videoSrc = $("#heroplayer").attr("src");
    //    console.log($videoSrc);
    //});
   

    //$('#playVideoModal').on('shown.bs.modal', function (e) {

    //    // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
    //    $("#heroplayer").attr('src', $videoSrc + "?rel=0&amp;showinfo=0&amp;modestbranding=1&amp;autoplay=1");
    //})


    //// stop playing the youtube video when I close the modal
    //$('#playVideoModal').on('hide.bs.modal', function (e) {
    //    // a poor man's stop video
    //    $("#heroplayer").attr('src', $videoSrc);
    //})

});





/*
$(window).resize(function () {
    if ($(this).width() < 640) {

        SeeMoreTrans();

    } else {

        displayhiddenTrans();

    }
});
*/
// fo sugnup forms
function ResetScrollPosition(e) {

    setTimeout("document.getElementById('frmPoint').scrollIntoView()", 0);
    e.preventDefault();
    e.stopPropagation();
}



function topFixedMenu() {
    if ($('#memberTrialTopMsg').length > 0) {
        if ($('#memberTrialTopMsg').is(':visible')) {
            if (window.innerWidth > 1023) {
                //for screens above 1023px
                var topBarMrg = '';
                topBarMrg = $('#memberTrialTopMsg').height();
                $('#topbarFixed').css('top', topBarMrg + 'px');
                var topContentMem = $('#topbarFixed').height() + topBarMrg;
                $('#contentMemFixed').css('margin-top', topContentMem + 'px');

            } else {
                //for screens under 1023px
                var topBarMrg = '';

                /* this section of code is for active sticky under 1023px
                topBarMrg = $('#memberTrialTopMsg').height();
                topBarMrg += 40;
                $('#topbarFixed').css('top', topBarMrg + 'px');
                var topContentMem = $('#topbarFixed').height() + topBarMrg;
                $('#contentMemFixed').css('margin-top', topContentMem + 'px');
                */

                /*this section is to prevent sticky under 1023*/
                $('#topbarFixed').css('top', '0');
                $('#contentMemFixed').css('margin-top', '0px');
            }
        } else {
            //if member top msg is closed
            $('#topbarFixed').css('top', '0px');
            var topContentMem = $('#topbarFixed').height();
            $('#contentMemFixed').css('margin-top', topContentMem + 'px');
        }
    } else {
        //if no top msg
        if (window.innerWidth > 1023) {
            $('#topbarFixed').css('top', '0px');
            var topContentMem = $('#topbarFixed').height();
            $('#contentMemFixed').css('margin-top', topContentMem + 'px');
        } else {
            $('#topbarFixed').css('top', '0px');
            $('#contentMemFixed').css('margin-top', '0px');
        }
    }
}

function ScrollToContactMsg() {
    var checkExist = setInterval(function () {
        if ($('#conTopMsg').length) {
            document.getElementById('conTopMsg').scrollIntoView()

            clearInterval(checkExist);
        }
    }, 100); // check every 100ms

}


function DetectMacSafar() {
    console.log(navigator.userAgent);
    /* Adjustments for Safari on Mac */
    if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Mac') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
        // console.log('Safari on Mac detected, applying class...');
        $('form').addClass('safari-mac'); // provide a class for the safari-mac specific css to filter with
    }

}

function ToggleMobileMenuIcon() {
    $(".menu-icon").click(function () {
        $(".menu-icon").toggleClass("isActive");
        $('.mPortalDrop').hide();
    });

    $(window).on('resize', function () {
        var win = $(this); //this = window
        if (win.width() >= 1023) {
            if (!($("#mobilemenu").css('display') == 'none')) {
                $(".menu-icon").removeClass("isActive");
            }



        }
    });

}

function ToggleTransaction() {
    $(".buttonView").click(function () {
        $(this).hide();
        $(this).parent().find(".firstContent").slideToggle("slow");
        $(this).parent().find(".hidden_content").slideToggle("slow");
        $(this).parent().find(".sep1").hide();
    });

    $(".buttonHide").click(function () {
        $(this).parent().parent().find(".firstContent").slideToggle("slow");
        $(this).parent().parent().find(".hidden_content").slideToggle("slow");
        $(this).parent().parent().find(".sep1").show();
        $(this).parent().parent().find(".buttonView").delay(600).fadeIn(200);
    });
}





//seeMoreTrans

//Activate New accordion after btn view more is clicked on Member Landing page
function activateAccordion() {
    $('#scrollingcontent').on('DOMNodeInserted', function (e) {
        if ($(e.target).is('.scrollingcontentblock')) {
            $('.accordion').foundation();
        }
    });
}
//Activate New accordion after btn view more is clicked on Search Results page
function activateAccordionSrcRes() {
    $('.srchResultWrap').on('DOMNodeInserted', function (e) {
        $('.accordion').foundation();
    });
}

//function calc equlizer height
function calcEqHeight() {
    Foundation.reInit('equalizer');
    console.log('eq');
}






//function HoverColor() {
//    $(".rectangle33").hover(
//      function () {
//          $(this).find('.grayscale').addClass("grayscale-off");
//      }, function () {
//          $(this).find('.grayscale').removeClass("grayscale-off");
//      }
//    );
//}

function SeeMoreTrans() {
    $(".transItemsWrap .column").css('display', 'none');
    $(".transItemsWrap .column").slice(0, 3).show();
    $("#seeMoreTrans").on('click', function (e) {
        e.preventDefault();
        $(".transItemsWrap .column:hidden").slice(0, 4).slideDown();
        if ($(".transItemsWrap .column:hidden").length == 0) {
            $("#load").fadeOut('slow');
        }
    });
}

function displayhiddenTrans() {
    $(".transItemsWrap .column").css('display', 'block');
}

function calcTransHeight() {
    var wrapheight;
    wrapheight = $(".hidden_content").height();
    wrapheight = wrapheight / 2;
    $(".transTextWrapper").height(wrapheight);
}

function sideNav() {
    if ($(window).width() < 1023) {
        $('#rightHand').removeClass('sticky');
    } else {
        $('#rightHand').addClass('sticky');
    }
}

function GetCurrentSector() {
    // console.log('GetCurrentSector');
    var curSec = $("#filterSelecteditems  .lev0").attr("id").split('_');
    curSec = curSec[curSec.length - 1];
    // console.log(curSec);
    return curSec;
}

String.prototype.replaceAll = function (search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

function GegerateIconFileName(fileName) {
    // var iconFileName = fileName.replace(/["~!@#$%^&*\(\)_+=`{}\[\]\|\\:;'<>,.\/?"\- \t\r\n]+/g, '_') + ".png";
    var iconFileName = fileName.replace(/ /g, '_').replace(/[!@#$%^&*'./-]/g, '_') + ".png";
    // console.log('iconFileName >>', iconFileName);
    return iconFileName;
}
//reporttype
function GetReportTypeCats(catId) {
    console.log('GetReportTypeCats - reporttype');
    $.ajax({
        url: '/api/category/GetValidReportTypes/' + catId,
        type: 'GET',
        contentType: 'application/json; charset=utf-8',
        success: function (Data) {
            if (Data.responseString = 'successful') {
                //  console.log(Data);

                // console.log(Data);
                $("div#level1").html('');
                if ($("div#level1").is(':empty')) {
                    $.each(Data, function () {

                        var html = htmlTmplCategory;//$("#itemTemplate").html();
                        var id = this.categoryNamePath.replaceAll(" ", "").replaceAll("/", "_");
                        html = html.replace("[[id]]", id);
                        html = html.replace("[[iconId]]", "icon" + id);
                        html = html.replace("[[sectorId]]", catId);
                        html = html.replace("[[catid]]", this.categoryId);
                        html = html.replace("[[desc]]", this.categoryDisplayName);
                        html = html.replace("[[childcount]]", this.childCategoryCount);

                        // var iconFileName = this.categoryDisplayName.replace(/ /g, "_").replace(/&/g, "_") + ".png";
                        // console.log("***1");
                        var iconURL = "/App_Themes/ZelmanSite/images/icons/iir/reporttype/" + GegerateIconFileName(this.categoryDisplayName);

                        html = html.replace("[[ICONURL]]", iconURL);

                        // console.log('childCount', this.childCategoryCount);
                        $("div#level1").append(html);

                        $("img").error(function () {
                            $(this).unbind("error").attr("src", "/App_Themes/ZelmanSite/images/icons/iir/Default.png");
                        });

                    });
                }
            }
            else {
                // console.log("123");
                console.log(Data);
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            //print error
            console.log(textStatus, errorThrown);
        }
    });
}

function SortByName(a, b) {
    var aName = a.categoryDisplayName.toLowerCase();
    var bName = b.categoryDisplayName.toLowerCase();
    return ((aName < bName) ? -1 : ((aName > bName) ? 1 : 0));
}
//company
function GetCategoryCats(sectorId, reportTypeId, categoryId) {
   // console.log('GetCategoryCats - company');
    // console.log('GetCategoryCats>>','sectorId',sectorId, 'reportTypeId', reportTypeId, 'categoryId', categoryId);
    $.ajax({
        url: '/api/category/GetValidCategories/',
        type: 'POST',
        //async: false,
        contentType: 'application/json; charset=utf-8',
        data: JSON.stringify({ sectorId: sectorId, reportTypeId: reportTypeId, categoryId: categoryId }),
        success: function (Data) {
            if (Data.responseString = 'successful') {

                // console.log(Data);
                $("div#level2").html('');
                if ($("div#level2").is(':empty')) {
                    // sort by abc
                    Data.sort(SortByName);
                    $.each(Data, function () {
                        // console.log(this);
                        var html = htmlTmplCategory;//$("#itemTemplate").html();
                        // console.log(this.categoryDisplayName);
                        var id = this.categoryNamePath.replaceAll(" ", "").replaceAll("/", "_");
                        html = html.replace("[[id]]", id);
                        html = html.replace("[[iconId]]", "icon" + id);
                        html = html.replace("[[sectorId]]", sectorId);
                        html = html.replace("[[catid]]", this.categoryId);
                        html = html.replace("[[desc]]", this.categoryDisplayName);
                        html = html.replace("[[childcount]]", this.childCategoryCount);

                        // console.log("***2");
                        //var iconURL = "/App_Themes/ZelmanSite/images/icons/iir/companylogos/" + GegerateIconFileName(this.categoryDisplayName);

                        html = html.replace("[[ICONURL]]", this.categoryIconImagePath);
                        // console.log('childCount', this.childCategoryCount);
                        $("div#level2").append(html);

                        $("img").error(function () {
                            $(this).unbind("error").attr("src", "/App_Themes/ZelmanSite/images/icons/iir/Default.png");
                        });
                    });
                }
            }
            else {
                console.log(Data);
            }

        },
        error: function (jqXHR, textStatus, errorThrown) {
            //print error
            console.log(textStatus, errorThrown);
        }
    });
}
//report
function filterReportTypes() {
    //console.log('*********filterReportTypes - report >>');
    //clicks for Report Type
    //$("#level1 .column .callout").click(function () {
    //  console.log('filterReportTypes >>', '$("#level1 .column .callout") >>');
    // hide close btn
    $(".lev0 .closeSector").hide();
    $("#level2,#level3").hide();
    var filter = $(this).attr("id");

    var catId = $(this).attr("catId");
    var sectorId = $(this).attr("sectorId");
    var childCount = $(this).attr("childCount");
    //  console.log('catId:',catId,'sectorId:',sectorId,'childCount >>', childCount);
    //Some report types contain docs

    if (childCount > 0) {
        GetCategoryCats(sectorId, catId, 0);

    }

    // var filterItem = "<div data-level='level1' id=" + filter + ">" + $(this).text() + "<a id='close'>close</a></div>"

    // Check for COMPANY SEPCIFIC selection, if TRUE -> update title
    var string1 = filter.split('_').join(' ').replace('-', ' ').toLowerCase(),
       substring1 = "company specific";

    if(string1.indexOf(substring1) !== -1){
        $("#lev2Title").html(comSpecificTitle);
    } else {
      //  var title = $("#lev1Title b");
        $("#lev2Title").html("<b>CHOOSE A REPORT:</b>");
    }
   

    // show/hide titles
    $("#lev0Title, #lev1Title").hide();
    $("#lev2Title").show();
    //end

    var tempId = ".icon" + filter;
    var iconUrl = $(tempId).attr("src");
    // console.log('>>>>',tempId, iconUrl);
    var filterItem = "<div class='column'><div class='callout lev1' data-equalizer-watch='' style='height: 61px;' data-level='level1' id=" + filter + "><span><img src='" + iconUrl + "'><p>" + $(this).text() + "</p></span><button id='close' class='closeSector'>&nbsp;</button></div></div>"


    $("#filterSelecteditems").append(filterItem);
    $("#level2").show();
    $("#level2 .column").hide(); // was -> $("#level2 .column .callout").hide();

    ///
    $("#level2 .column").attr('data-sort', '0');
    $("#level2 .column [id^=" + filter + "]").parent().show(); //was  ->   $("#level2 [id^=" + level1 + "]").show();
    //$("#level2 .column [id^=" + filter + "]").parent().attr('data-sort', '1');
    //
    //add data for future sort
    i = 0;
    $("#level2 .column [id^=" + filter + "]").parent().each(function () {        
        $(this).attr('data-sort', 100000 - i);
        i++;
    });
    // sort
    
    var divList = $("#level2 .column");
    divList.sort(function (a, b) {
        return $(b).data("sort") - $(a).data("sort")
    });
    $("#level2").html(divList);
    $("#level1").hide();

    // check if still rendering categories -> if 1 (true)-> hide resutls/do not fetch
    //check if empty
    // ISSUE , need to flag if to fetch    

    var ALL_SECTORS = 16;
    if (childCount == 0) {
        if ($("#level2 [id^=" + filter + "]").length == 0 || (sectorId == ALL_SECTORS)) {
            if (sectorId == ALL_SECTORS) {
                //Clear out all contents of level 2
                $("#level2").empty();
            }        
            var sectorid = $(this).attr("sectorid");
            var catid = $(this).attr("catid"); 
            
            if (catid === "19" || catid === "41") {
                LoadAllRecurringCategories(catid);
            } else {
                LoadReports(sectorid, catid);                
            }            
        }
    }
}

$('body').on('click', '#level1 .column .callout', filterReportTypes);


//start

function LoadAllRecurringCategories(catid) {
    $.ajax({
        url: '/api/category/GetAllReportTypeCategories/' + catid,
        type: 'POST',
        contentType: 'application/json; charset=utf-8',
        data: JSON.stringify({ catid: catid }),
        success: function (Data) {
            if (Data.responseString = 'successful') {
                $.each(Data, function () {                    
                    var html = htmlTmplCategory;                    
                    var id = this.categoryNamePath.replaceAll(" ", "").replaceAll("/", "_");
                    html = html.replace("[[id]]", id);
                    html = html.replace("[[iconId]]", "icon" + id);
                    html = html.replace("[[sectorId]]", 16);
                    html = html.replace("[[catid]]", this.categoryId);
                    html = html.replace("[[desc]]", this.categoryDisplayName);
                    html = html.replace("[[childcount]]", this.childCategoryCount);
                    html = html.replace("[[ICONURL]]", this.categoryIconImagePath);
                    
                    var iconURL = "/App_Themes/ZelmanSite/images/icons/iir/reporttype/" + GegerateIconFileName(this.categoryDisplayName);
                    html = html.replace("[[ICONURL]]", iconURL);

                    $("div#level2").append(html);

                    $("img").error(function () {
                        $(this).unbind("error").attr("src", "/App_Themes/ZelmanSite/images/icons/iir/Default.png");
                    });
                });
            }
            else {
                console.log(Data);
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {            
            console.log(textStatus, errorThrown);
        }
    });
}

//end

function LoadReports(sectorid, catid, sortField, sortOrder) {
    console.log("sortType>>>", sortField, "-", sortOrder);
    if (sortField == undefined)
        sortField = "name";

    if (sortOrder == undefined)
        sortOrder = "ASC";


    $('#img-load').show();

    //bust is a cache buster to prevent the browser from caching the request
    $("#ajax").load('/products-services/institutional-investor-research/show-reports' + '?qs=' + sectorid + '&sortField=' + sortField + '&sortOrder=' + sortOrder + '&qrt=' + catid + '&bust='+ (new Date().getTime()) + '  #iirReportResults', function () {
        $('#img-load').hide();
        hideAllFilterTitle();
    });
}
//sector
function filter() {
    console.log('****filter >> sector');
    //clicks for Sector
    $("#level0  .column .callout").click(function () {
        $("#level0").hide();
        var clickedId = $(this).attr("catid");
        GetReportTypeCats(clickedId);

        //fill Report Type
        $("#level1").show();


        var filter = $(this).attr("id");
        //  console.log(filter);
        var tempId = ".icon" + filter;
        var iconUrl = $(tempId).attr("src");
        var filterItem = "<div class='column'><div class='callout lev0' data-equalizer-watch='' style='height: 61px;' data-level='level0' id=" + filter + "><span><img src='" + iconUrl + "'><p>" + $(this).text() + "</p></span><button id='close' class='closeSector'>&nbsp;</button></div></div>";
        $("#filterSelecteditems").append(filterItem);

        // show/hide titles
        $("#lev0Title, #lev2Title").hide();
        $("#lev1Title").show();
        //end
        // filterReportTypes();

        //add data for future sort
        //i = 0;
        //$("#level1 .column [id^=" + filter + "]").parent().each(function () {
        //    console.log(this);
        //    $(this).attr('data-sort', 100000 - i);
        //    i++;
        //});
        // sort
    });



    //Clicks for Categories
    $("#level2").on('click', '.column .callout', function () {//.click(function () {

        var filter = $(this).attr("id");
        //  var filterId = $(this).attr("id").replace(/(&:|\.|\[|\]|,)/g, "\\$1");
        var filterId = $(this).attr("id").replace(/[!@#$%^&*.']/g, '');
        //  var tempId = ".icon" + filter;
        //  var iconUrl = $(tempId).attr("src");
        //console.log('filter >>',filter);
        // console.log('1 >>', filter, ':', filterId);
        var filterItem = "<div class='column'><div class='callout lev2' data-equalizer-watch='' style='height: 61px;' data-level='level2' id=" + filter + "><p>" + $(this).text() + "</p><button id='close' class='closeSector'>&nbsp;</button></div></div>"

        // var filterItem = "<div class='column'><div class='callout lev2' data-equalizer-watch='' style='height: 61px;' data-level='level2' id=" + filter + "><span><img style='width:40px;' src='"+iconUrl+"'><p>" + $(this).text() + "</p></span><button id='close' class='closeSector'>&nbsp;</button></div></div>"
        $("#filterSelecteditems").append(filterItem);
        // hide close on lev
        $(".lev1 .closeSector").hide();
        //

        // show/hide titles
        $("#lev0Title, #lev1Title").hide();
        $("#lev2Title").show();
        //end

        $("#level3").show();
        $("#level3 .column").hide(); // was ->  $("#level3 .column .callout").hide();
        $("#level3 .column [id^=" + filterId + "]").parent().show();// was ->  $("#level3  [id^=" + filter + "]").show();
        $("#level2").hide();
        // console.log('2 >>');
        //check if next is empty
        if ($("#level3 [id^=" + filterId + "]").length == 0) {

            var sectorid = $(this).attr("sectorid");
            var catid = $(this).attr("catid");
            console.log(">> HIT12 ");
            LoadReports(sectorid, catid);
            //loader = function () {
            //    $('#img-load').show();
            //    $("#ajax").load('/products-services/institutional-investor-research/show-reports' + '?qs=' + sectorid + '&qrt=' + catid + '  #iirReportResults', function () {
            //        $('#img-load').hide();
            //        hideAllFilterTitle()
            //    });
            //}
            //loader();
        }
    });

    //3
    $("#level3 .column .callout").click(function () {
        var filter = $(this).attr("id");
        var filterItem = "<div class='column'><div class='callout' data-equalizer-watch='' style='height: 61px;' data-level='level3' id=" + filter + "><span><img src='/App_Themes/ZelmanSite/images/icons/Apartments.png'>" + $(this).text() + "</span><button id='close' class='closeSector'>&nbsp;</button></div></div>"
        $("#filterSelecteditems").append(filterItem);
        $("#level3").hide();
        // hide close on lev
        $(".lev2 .closeSector").hide();
        //
        //print url + get reports
        // console.log(filter);
        //var curSector = GetCurrentSector();
        //var getThis = filter.split('_').join('/');
        //var tempE = filter.split('_');

        var sectorid = $(this).attr("sectorid");
        var catid = $(this).attr("catid");
        console.log(">> HIT13 ");
        //console.log(tempE[tempE.length - 1]);
        //$('#ajax').load('/products-services/institutional-investor-research/show-reports' + '?q=' + getThis);
        LoadReports(sectorid, catid);
        //loader = function () {
        //    $('#img-load').show();
        //    var tempRewUrl = '/products-services/institutional-investor-research/show-reports' + '?qs=' + sectorid + '&qrt=' + catid + '   #iirReportResults';
        //    $("#ajax").load(tempRewUrl, function () {
        //        $('#img-load').hide();
        //        hideAllFilterTitle()
        //    });
        //}
        //loader();
    });

    //Remove filter item
    // AG
    $('body').on('click', '#close', function () {
        $(this).parent().parent().remove();
        var getLevel = $(this).parent().attr("data-level");
        $("#level1,#level2,#level3").hide();
        //
        var showClsOnLvl = getLevel.replace("level", "") - 1;
        $(".lev" + showClsOnLvl + " .closeSector").show();
        //
        $('#' + getLevel).show();
        //show/hied titles
        $("#lev0Title, #lev1Title, #lev2Title").hide();
        $("#lev" + (showClsOnLvl + 1) + "Title").show();
        // console.log("#lev" + (showClsOnLvl + 1) + "Title");
        // clear out last showing results
        $("#ajax").empty();
    });
    //$("#lev0Title, #lev1Title").hide();
    //$("#lev2Title").show();


    //sort iir reports
    //    $("#ajax").on('click', '.iirSortNewest', function () {//.click(function () {
    //        alert(tempRewUrl + "123");
    //    });

    $(".viewSectorsWrap").click(function () {
        ///show/hide title
        $("#lev1Title, #lev2Title").hide();
        $("#lev0Title").show();

        $("#ajax, #filterSelecteditems").empty();

        $("#level1,#level2").hide();
        $("#level0").show();

    });
}

function hideAllFilterTitle() {

    $("#lev0Title, #lev1Title, #lev2Title").hide();
    allItemsCount = 0,
       allItemsMax = $('.allReports a').length;
    $('.allReports a').hide();
    showNextAllReportItems();
}

function showNextAllReportItems() {
    //Number of result shown per page
    var pagination = 15;
    for (var i = allItemsCount; i < (allItemsCount + pagination) ; i++) {
        $('.allReports a:eq(' + i + ')').show();
    }
    allItemsCount += pagination;

    if (allItemsCount > allItemsMax) {
        $('#showMoreAllReport').hide();
    } else {
        $('#showMoreAllReport').show();
    }
};
$('#showMoreAllReport').on('click', function (e) {
    e.preventDefault();
    showNextAllReportItems();
});
var latestItemsCount = 0,
    latestItemsMax = $('.latestReport a').length;
$('.latestReport a').hide();

function showNextLatestItems() {
    //Number of result shown per page
    var pagination = 15;

    for (var i = latestItemsCount; i < (latestItemsCount + pagination) ; i++) {
        $('.latestReport a:eq(' + i + ')').show();
    }
    latestItemsCount += pagination;

    if (latestItemsCount > latestItemsMax) {
        $('#showMoreLatestReport').hide();
    } else {
        $('#showMoreLatestReport').show();
    }
};

showNextLatestItems();

$('#showMoreLatestReport').on('click', function (e) {
    e.preventDefault();
    showNextLatestItems();
});

var popularItemsCount = 0,
    popularItemsMax = $('.popularReport a').length;
$('.popularReport a').hide();

function showNextPopularItems() {
    //Number of result shown per page
    var pagination = 15;

    for (var i = popularItemsCount; i < (popularItemsCount + pagination) ; i++) {
        $('.popularReport a:eq(' + i + ')').show();
    }

    popularItemsCount += pagination;

    if (popularItemsCount > popularItemsMax) {
        $('#showMorePopularReport').hide();
    } else {
        $('#showMorePopularReport').show();
    }

};

showNextPopularItems();

$('#showMorePopularReport').on('click', function (e) {
    e.preventDefault();
    showNextPopularItems();
});



function FilterOnLoad() {
    //Company-Specific1_Apartment-REITs1_ZMICO1
    //Apartments_Thematic_Apartment-Investment-Mgmt
    var filterOnLoad = "";//"http://localhost:57771/Apartments_Thematic_Apartment-Investment-Mgmt";
    var arr = filterOnLoad.split('_');
    if (arr.length > 0) {
        var level1 = arr[0].split('/');
        level1 = level1[3];
    }
    if (arr.length > 1) {
        var level2 = level1 + "_" + arr[1];
    }
    if (arr.length > 2) {
        var level3 = level2 + "_" + arr[2];
    }
    //create filter one;
    if (level1 != undefined) {
        $("#level1").find('#' + level1);
        var filterItem = "<div class='column'><div class='callout' data-equalizer-watch='' style='height: 61px;' data-level='level1' id=" + level1 + "><span><img src='App_Themes/ZelmanSite/images/icons/Apartments.png'>" + $("#level1").find('#' + level1).text() + "</span><button id='close' class='closeSector'>&nbsp;</button></div></div>";
        $("#filterSelecteditems").append(filterItem);
        $("#level2").show();
        $("#level2 .column .callout").hide();
        $("#level2 [id^=" + level1 + "]").show();
        $("#level1").hide();
    }

    //create filter two;
    if (level2 != undefined) {
        $("#level2").find('#' + level2);
        var filterItem = "<div class='column'><div class='callout' data-equalizer-watch='' style='height: 61px;' data-level='level2' id=" + level2 + "><span><img src='App_Themes/ZelmanSite/images/icons/Apartments.png'>" + $("#level2").find('#' + level2).text() + "</span><button id='close' class='closeSector'>&nbsp;</button></div></div>";
        $("#filterSelecteditems").append(filterItem);
        $("#level3").show();
        $("#level3 .column .callout").hide();
        $("#level3 [id^=" + level2 + "]").show();
        $("#level2").hide();
    }

    //create filter three;
    if (level3 != undefined) {
        $("#level3").find('#' + level3);
        var filterItem = "<div class='column'><div class='callout' data-equalizer-watch='' style='height: 61px;' data-level='level3' id=" + level3 + "><span><img src='App_Themes/ZelmanSite/images/icons/Apartments.png'>" + $("#level3").find('#' + level3).text() + "</span><button id='close' class='closeSector'>&nbsp;</button></div></div>";
        $("#filterSelecteditems").append(filterItem);
        $("#level3").hide();
    }

}

function SortReport() {

    var sectorid = $(this).data("sectorid");
    var catid = $(this).data("catid");
    var sortorder = $(this).data("sortorder");
    LoadReports(sectorid, catid, 'LastModified', sortorder);
    //console.log('>>>',sortType);
}

$('body').on('click', '.ReportSort', SortReport);

function SignupSetMaxlength() {
    $(".txtFname").attr("maxlength", "30");
    $(".txtLname").attr("maxlength", "30");
    $(".txtEname").attr("maxlength", "100");
    $(".txtCoZipname").attr("maxlength", "10");
    $(".password-strength .form-control").attr("maxlength", "100");
}

function ContactUsSetMaxLength() {
    $(".contactMsg").attr("maxlength", "500");

}

$(window).resize(function () {
    sideNav();
    topFixedMenu();
    addScrollonResize();
});

function MemberPortalMenu() {
    $('.expandDiv').click(function () {
        $('.mPortalDrop').hide();
        //$('.mPortalDrop').foundation('destroy');
        var itemToShow = $(this).attr('data-at-toggle');
        $('#' + itemToShow).foundation('toggle');
        //added for veritcal scroll on small screens for contact us form (after top menu sticky)
        // if ($('#' + itemToShow).attr('id') == 'contactusDrop' || $('#' + itemToShow).attr('id') == 'bookmarkedDrop') {
        var curItemId = $('#' + itemToShow).attr('id');
        AddScrollToMemberDropWrap(curItemId, 0);
        //  }
    });
    $('.mPortalDrop .closeSector').click(function () {
        $('.mPortalDrop').hide();
    });
}

function addScrollonResize() {

    var curItemId = $('.mPortalDrop:visible').attr('id');
    AddScrollToMemberDropWrap(curItemId, 1);
}



function AddScrollToMemberDropWrap(curItemId, isResize) {
    //check if window is less then form the member drop wrap.
    // var itemHeight = $('.scrollWrap').height();
    if (window.innerHeight < 860 && window.innerWidth > 1023) {
        var curElementHeight = $('#' + curItemId + ' .scrollWrap').css('height');

        //calc on resize
        if (isResize == 1)
        {
            recalcHeight(curItemId,1);
            return;
        }
        //calc when not resize
        if (curElementHeight != 'auto') {
            if (curElementHeight == '0px') {
                recalcHeight(curItemId,0);
            }
        }

    } else {
        $('#' + curItemId + ' .scrollWrap').css({ 'overflow-y': 'hidden', 'overflow-x': 'hidden', 'height': 'auto' });
    }
}


function recalcHeight(curItemId,isResize) {
    //calc top bars height 
    var calcScrollBoxHeight = $('#memberTrialTopMsg').height() + $('#topbarFixed').height() + 150;
    //calc window height minus top bars
    var finalHeight = window.innerHeight - calcScrollBoxHeight;


    if (isResize != 1) {
        //check if current box height smaller then window.
        if (finalHeight >= $('#' + curItemId).height()) {
            $('#' + curItemId + ' .scrollWrap').css({ 'overflow-y': 'hidden', 'overflow-x': 'hidden', 'height': 'auto' });
        } else {
            $('#' + curItemId + ' .scrollWrap').css({ 'overflow-y': 'auto', 'height': finalHeight + 'px' });
        }

    } else {
        $('#' + curItemId + ' .scrollWrap').css({ 'overflow-y': 'auto', 'height': finalHeight + 'px' });
    }

    

}




function ShowMemberResutlCout() {
    $("#memberSearchCout").html(resultCount); // resultCount var is passed from transformation
}

function addParamToCurUrl(param, el, e) {
    tempUrl = location.href.replace(/&?q=([^&]$|[^&]*)/ig, "");
    // tempUrl = tempUrl.replace(/&?p=([^&]$|[^&]*)/ig, "");// adde for p size
    // tempUrl = tempUrl + "&p=" + srchResPgS + "&q=" + param + "#showSort";
    tempUrl = tempUrl + "&&q=" + param + "#showSort";
    // console.log(tempUrl);
    location.href = tempUrl;
    e.preventDefault()
}

function udpdateSrcPg() {
    srchResPgS += srchResPgSOrigSize;
    console.log(srchResPgS);
}
//var backbutton = document.getElementById("backButton");
//backbutton.onclick = function (e) {
//    e = e || window.event; // support  for IE8 and lower
//    e.preventDefault(); // stop browser from doing native logic
//    window.history.back();
//}
function goBack(e) {

    e = e || window.event; // support  for IE8 and lower
    e.preventDefault(); // stop browser from doing native logic
    window.history.back();
}


function OpenCloseMemberDetails() {
    $('.teamWrap #closeMember').click(function (e) {
        if ($(window).width() < 768) {
            //this option not prevent the a anchor link
        }
        else {
            e.preventDefault();
        }
        $(this).parent().hide();
        $('.teamWrap h3').show();
        $("#teamMembers").show();
    });

    //showDetails
    $('.showDetails').click(function () {
        //$(this).parent().hide();
        var itemToShow = $(this).attr("data-item");
        $("#teamMembers").hide();
        $('.teamWrap h3').hide();
        $('#' + itemToShow).show();
        $('html, body').animate({ scrollTop: $('#' + itemToShow).offset().top }, 500);
    });
}


function meetMoreTeamBtnTxt() {
    $("#seeMoreItems").click(function () {
        var flag = '';
        $(this).attr('class', function (i, v) {
            flag += v;
            return v === 'meetmoreopen' ? 'meetmoreclose' : 'meetmoreopen';

        });
        //focus after btn click
        if (flag == 'meetmoreopen') {
            $('html, body').animate({ scrollTop: $("#moreTeamWrap").offset().top }, 500);
        } else {
            $('html, body').animate({ scrollTop: $("#teamWrap").offset().top }, 500);
        }


    });
}
//control view all sectors button on Institutional Investor Research Page
function displayViewSectorBtn() {
    //code that triggers the show/hide event when a DIV visibility is changed
    $.each(['show', 'hide'], function (i, ev) {
        var el = $.fn[ev];
        $.fn[ev] = function () {
            this.trigger(ev);
            return el.apply(this, arguments);
        };
    });

    //
    $('body #level0').on('show', function () {
        $('.sectorWrap .button').hide();
    });

    $('body #level0').on('hide', function () {
        $('.sectorWrap .button').show();
    });
};

// Shorting Repeater Result.
function iirSortNewest(element, divClass) {
    //Sort record.
    shortReport(element, divClass,'iirSortNewest');
    // Refresh lazy loader.
    LoadMoreRefresh(divClass);
}
function iirSortOldest(element, divClass) {
    // Short record.
    shortReport(element, divClass, 'iirSortOldest');
    // Refresh lazy loader.
    LoadMoreRefresh(divClass);
}

function shortReport(element, divClass, sortOrder) {
    $(element).parent().find('a').removeClass('shortActive');
    $(element).addClass("shortActive"); // Set active class.
    var DIVS = $('.' + divClass + ' a'); // Get all result.
    var sortedReport = DIVS.sort(function (a, b) {
        var from = new Date($(a).find("span").text());
        var to = new Date($(b).find("span").text());
        if (sortOrder == 'iirSortNewest') {
            return (from < to ? 1 : -1);
        } else {
            return (from > to ? 1 : -1);
        }
    });
    $('.' + divClass).html(sortedReport);
}

function LoadMoreRefresh(divClass) {
    if (divClass = "allReports") {
        allItemsCount = 0,
        allItemsMax = $('.' + divClass + ' a').length;
        $('.' + divClass + ' a').hide();
        showNextAllReportItems();
    }
    if (divClass = "latestReport") {
        latestItemsCount = 0;
        latestItemsMax = $('.' + divClass + ' a').length;
        $('.' + divClass + ' a').hide();
        showNextLatestItems();
    }
    if (divClass = "popularReport") {
        popularItemsCount = 0;
        popularItemsMax = $('.' + divClass + ' a').length;
        $('.' + divClass + ' a').hide();
        showNextPopularItems();
    }
}

//Show more button on my bookmarks page
var myBookmarksCount = 0,
    myBookmarksMax = $('.myBookmarks .zReportResutlsItem').length;
$('.myBookmarks .zReportResutlsItem').hide();
showNextMyBookmarks();

function showNextMyBookmarks() {
    //Number of result shown per page
    var _page = 15;

    for (var i = myBookmarksCount; i < (myBookmarksCount + _page) ; i++) {
        $('.myBookmarks .zReportResutlsItem:eq(' + i + ')').show();
    }
    myBookmarksCount += _page;

    if (myBookmarksCount >= myBookmarksMax) {
        $('#showMoreMyBookmarks').hide();
    } else {
        $('#showMoreMyBookmarks').show();
    }
};

$('#showMoreMyBookmarks').on('click', function (e) {
    e.preventDefault();
    showNextMyBookmarks();
});

// search & search resutls pages   
function showUserRecentSearches() {
    $('.smSrchInput').bind('blur', function () {
        setTimeout(
          function () {
              $('#srchResultsSrch .predictiveSearchHolde1r').hide();
          }, 500);

    });

    $('.smSrchInput').bind('focus', function () {
        $('#srchResultsSrch .predictiveSearchHolde1r').show();
    });

    $(".smSrchInput").keydown(function () {
        $('#srchResultsSrch .predictiveSearchHolde1r').hide();
    });

    $(".predictiveSearchResultsFull").on('click', function (e) {
        $('#srchResultsSrch .predictiveSearchHolde1r').hide();
    });

}