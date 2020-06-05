Version Control with Git
========================

by Atlassian

# Module 4

#### Title: Git Workflows

### Pull Reqeuest I

#### Pull Request Overview

* A feature of Git hosting sites such as Bitbucket and GitHub
* The ultimate goal of a pull request is to merge a branch into the project
* Pull requests enable team communication related to the work of the branch
	- Notifications, related to the pull request, can be sent to team members
	- Feedback or comments --> Those team members can provide feedback or comments, and ultimately can a have a say in approving the content
	- This can act as a form of code review.


##### Two Repository Configuration

* There are two basic repository configurations related to pull requests
	- The first one is a single remote repository, a pull request in a single repository configuration is a request to merge a branch of the repository
	- The second configuration involves two remote repositories, in this configuration, 
		* a pull request is a request to merge a branch from a forked repository into the upstream repository
		* The fork approach is common if the submitter doesn't have write access to the upstream repository.

##### When do you open a Pull Request?

* You can create a pull request, which is also called opening a pull request, anytime during the life of the branch.
* You can open a pull request when you create the branch, this enables the team to begin discussion on the work of the branch immediately.
* You can also open a pull request when you want comments on the branch. 
	- Example, you may be stuck implementing something and want to ask the team for help.

* You can open the pull request when you think the branch is ready for review and merging.

***NOTE: A pull request can be opened at any time after the related branch is created.***


#### Single Repository Pull Requests

* Syntax
	- git pull 

* Preparing for Pull Request (Single Repository)
	- Create a feature branch --> This is the branch that we hope will eventually be merged into a longer running branch
	- Optionally work on the feature branch 
		* You can work on the feature branch before opening a pull request
		* But to start the team discussion, you can also open a pull request immediately after creating the branch
	- Push the branch to the remote repository

* To open a pull request
	1. Log into bitbucket
	1. Navigate to your remote repository
	1. Click on Pull requests.

	* Here you can create or view any pull request related to the repository

* Approving a Pull request
	1. Your project might require a certain number of approvals before the merge is allowed. A person doing the merging of the pull request can gain confidence depending on how many people approve it, and by who specifically approves it.
	1. Click Decline to reject or remove the pull request. 
		* Be careful if you do this because it cannot be undone.

* Pull Request merge Strategy
	1. Merge Commit - The merge creates a separate commit object
		* git merge --no-ff
	1. Squash - The entire branch is condensed to one linear commit
		* git merge --squash

* Delete remote branch labels
	- git push -d `<remote>` `<branch-name>`

* Push branch labels to remote
	- git push --set-upstream `<remote>` `<branch-name>`

#### Review

1. Pull requests are opened using an online Git host such as Bitbucket of GitHub
1. The ultimate goal of a pull request is to merge a branch, but they also facilitate team discussion and approval
1. You can open a pull request any time after creating the branch
1. You do not need to edit the pull request if you add a commit to the branch
1. You can merge the pull request using an online Git host or by pushing the merge from your local client


### Pull Reqeuest II

#### Forking Overview

* Forking generally means copying a remote repository to your own online account
* It is a feature of get hosting services such a Bitbucket and GitHub
* The upstream repository is usually considered the "Source of Truth" for the project

* ***What is fork used for?***
	- It can be used to experiment with or learn from the upstream repository
	- A fork can also be used to create branches and issue pull requests to the upstream repository
	- A fork can also be used to create a different source of truth
		* In other words, it can be used to start a new line of development of the project that remains independent from the upstream repository
		* You could use the upstream project as a starting point for a different type project or you could create a source of truth that competes with the upstream project

#### Creating a Fork

* ***Forking a Repository***
	- A fork is a feature of a Git hosting service
	- we log in to Bitbucket and navigate to the repository that we want to fork
	- We then click on the Fork this repository link
	- We then name the forked repository
	- We then click Fork repository

#### Synchronizing a Fork

* Syncing Fork
	* If commits are made on the upstream repository, by default the fork will not contain those commits
		* Example
			- We are viewing our forked repository in the Bitbucket. 
			- If you see a message saying that "this fork is 1 commit behind the upstream repository"
				- This means that since we last synchronized, a commit has been made to the upstream repository. 
			- To synchronize your repositories, you start by clicking the Sync now link

	* Synchronizing using Bitbucket creates a merge commit on the forked repository
	* You can see that when we sync the repository, Bitbucket displays a default commit message. This is for the merge commit
	* This merge commit is not in the upstream repository. So even though the project files are synchronized, the commit histories of the two repositories differ
	* This behavior may be fine, depending on how you are using the fork
	* If you would like more control over the commit histories, you can manually sync the repositories using your local Git client


* Viewing Merge Commit
	* After sinking the fork, you can view the merge commit in Bitbucket
	* In your local client, you'll need to do a pull to see the merge commit and have the latest project files


#### Multi Repository Pull Requests

* To open a multi-repository pull request
	1. Fork the upstream repository
	1. Create a branch on that fork - This branch will be the branch related to the pull request
	1. Create a pull request right from your fork

* To create the pull request
	- Navigate to the forked repository and click Create a pull request. Because this is a forked repository, Bitbucket knows the information related to the upstream repository
	- In the window that opens, default pull request information is filled out for you
	- You add a title and description, change any other information
	- Click "Create pull request"

* Pull Request on Upstream
	- The upstream repository will then have an open pull request
	- You can navigate to the pull request's tab to view and act upon the pull requests
	
* Merging Multi-Repository Pull Request
	- There are 2 ways to do this
		1. First is to, Use BitBucket interface
		1. Second is to use a local client to
			1. Add the forked repository as a remote
			1. Perform and push the merge to the upstream repository


* Git log graph after Merging Multi-Repository Pull Request

	`*   0540477 (HEAD -> master, origin/master, origin/HEAD) Merged sambhipiyush/projectj into master`\
	`|\  `\
	`| *   3dba816 Merged in sambhipiyush/projectjfork/feature1 (pull request #1)`\
	`| |\  `\
	`| | * 43c10e9 feature 1 commit`\
	`| |/  `\
	`|/|   `\
	`* | 24bf75a Merged sambhipiyush/projectj into master`\
	`|\| `\
	`| * 749e5f0 ANOTHER COMMIT for FORK SYNC EXAMPLE`\
	`|/  `\
	`* 9464023 Initial commit`\



##### Review

1. A fork is a remote copy of an upstream remote repository
1. A fork is created using an online Git hosting provider
1. Forks and upstream repositories may become out of sync
1. Pull requests can be made from forks and merged into the upstream repository


### Git Workflows

#### Centralized Workflows

* A centralized workflow uses a single branch to accomplish the work of the project
* Even though this workflow is very simple, you still gain many of the benefits of git
	* Your team members can all work independently
	* Each has a local copy of the project history

#### Feature Branch Workflow

* In a feature branch workflow, the work of the project is done in feature, or topic branches
* The work is then merged into a longer running branch
* The feature branch workflow uses a single remote repository
* Team members create feature branches and can submit their work using pull requests


#### Forking Workflow

* The forking workflow involves multiple remote repositories
* One of the repositories is considered upstream from the other
* The upstream repository is considered the source of truth for the project
* Work is usually transferred from the remote repository to the upstream repository, via a pull request

* One ***Advantage*** of this workflow is that the user of the forked repository does not need to have right access to the upstream repository
	- This is because a user on the upstream repository merges the pull request
		- Because of this, the forking workflow is very common in open source projects

* Forking a repository is a great way to work on a feature branch without sharing your branch
	* This provides a remote backup of your work, and allows you to safely rebase your local branch

* ***A downside*** of this approach is that the two remote repositories can become out of sync. It's the responsibility of the forked repository to keep up to date with the upstream repository.


#### Gitflow Workflow

* GitFlow is a workflow that allows safe continuous releases of the project
* It allows work to continue even through releases and hotfixes

##### Merging RULES

- One rule is to only use merge commits on master
- Another rule is that the commits to master can only come from release or hotfix branches
	* You should not directly merge from the develop or feature branches
	* This helps ensure proper testing and quality for the release
- The third rule is, if you commit to master, also merge into the develop branch
	* If you don't do this, issues that were fixed will reappear in future releases


##### Review

* A centralized workflow involves working on a single branch.
* In a feature branch workflow, work of the project is done on feature or topic branches and then merged into longer running branches
* In a forking workflow, work is added upstream using pull requests from the forked repository
* GitFlow workflows enable a continuous train of project releases using multiple types of branches

