Version Control with Git
========================

by Atlassian

# Module 3

#### Title: Branching and Merging II

### Resolving Merge Conflicts

#### Merge conflict Overview

* If you perform a merge with a merge commit, Git takes on the responsibility of combining the work of multiple branches and placing the result into a single merge commit. Git will try to do this automatically
* There are cases where multiple branches make different changes to the same part of a file. In that case, a ***Merge Conflict*** occurs and a person needs to make a decision on how to resolve it
* We have just seen that a merge conflict can occur if different branches change the same part of a file in different ways.

* GIT automatically merges changes to different parts (HUNKS) of files.
* ***Hunk*** --> Part of a file

* Merge Strategy : https://git-scm.com/docs/merge-strategies

##### Avoiding Merge Conflicts
* Avoid making a lot of changes over a long period of time without merging
* Smaller frequent mergers are usually the best approach
	* It's better to create many small merge problems than one giant merge problem.

* Decoupled modular code is much less likely to have merged conflicts
* In some ways, the number and complexity of merge conflicts is a test of how modular your code is.


#### Resolving a Merge Conflict

* Resolving merge conflict between 2 branches involves 3 commits:
	1. The tip of the current branch --> we call it "ours" or "mine"
	1. The tip of the branch to be merged --> we call it "theirs"
	1. A common ancestor --> we call it "merge base"

* Steps to Resolve Merge Conflict:
	1. Checkout master
	1. Merge branch (featureX)
		* CONFLICT - Both modified fileA.txt
	1. Fix fileA.txt
	1. Stage fileA.txt
	1. Commit the merge commit
	1. Delete the branch (featureX) label

* When attempting a merge, files with conflict are modified by Git and placed in the working tree

* ***Conflicted Hunk*** --> Conflicted hunks are surrounded by conflict markers <<<<<<< and >>>>>>>

* ***Reading Conflict Markes***
	* Text from HEAD commit is between <<<<<<< and =======
	* Text from branch to be merged is between ======= and >>>>>>>


### Tracking Branches

#### Tracking Branches Overview

* A local branch that represents a remote branch
	* `<remote>/<branch>` --> Generally we see origin/master whenever we clone a git.
	* Origin is a shortcut for the URL to the remote repository, and master is the name of the branch on the remote repository.

* Tracking branch represents the remote master branch
* Locally, a tracking branch name starts with the remote name then a forward slash and then the branch name


* ***Tracking Branch - Related but Decoupled***
	* A tracking branch is related to its associated remote branch and local branch, but they are decoupled
	* Tracking branches updates separately from both the remote branch and the local branch. This is because tracking branches are only updated with network commands like clone, fetch, pull and push
	* The tracking branch acts as a sort of intermediary between the local and remote branches

#### Viewing Tracking Branch Names

* Syntax:
	* git branch --all --> To display all local and tracking branch names

*  ***remote/origin/HEAD***
	- This is a symbolic reference, meaning that it is a reference that points to another reference
	- This specifies the default remote tracking branch. This allows you to only type the remote name instead of the whole tracking branch name in git commands
	- This allows you to only type the remote name instead of the whole tracking branch name in git commands
	- Allows `<remote>` to be specified instead of `<remote>/<branch>` in GIT commands.

* ***Changing remotes/origin/HEAD***
	* You can change the default remote tracking branch locally using the git remote set head command
	* Syntax
		- git remote set-head `<remote>` `<branch>`


#### Viewing Tracking Branch Status

* ***git status*** command includes tracking branch status
* Git tells us that we are up to date with the tracking branch, which means that as of the last time that we issued a network command like fetch, we have the latest commit in our local repository, and our local master branch label points to that same commit

* ***git status*** will also inform you if the cached tracking branch information is out of sync with your local branch

* ***git log --all*** will show combined log of all local and tracking branches
	* If you see a message like ***"the local master branch is one commit ahead of the tracking branch"***, then this means that the local repository has a commit that the remote repository does not have.

* ***origin/HEAD*** 
	- This label points to the tip of the default branch of the remote repository, which is the master branch. This is the branch that is checked out when you clone a repository.

* ***origin/master*** 
	- It represents the remote master branch. 
	- Origin is a shortcut for the URL to the remote repository, and master is the name of the branch on the remote repository. Because the clone just happened, these two repositories are synchronized.


#### Q & A

***QUESTION A*** What does the master label represent?\
***ANSWER A*** The master label represents the tip of the local master branch.\

***QUESTION B*** What does the origin/master label represent?\
***ANSWER B*** The origin/master label represents the tip of the tracking branch that tracks the master branch on the remote repository.\

***QUESTION C*** What does the origin/HEAD label represent?\
***ANSWER C*** The origin/HEAD label represents the tip of the default branch on the remote repository. The default branch on the remote repository is the master branch.\

***QUESTION D*** How do you create a state with the local branch one ahead of the tracking branch?\
***ANSWER D*** If you make a commit to the local repository without pushing it to the remote repository, the local branch becomes ahead of the tracking branch. The tracking branch only knows what the remote repository knows.\



### Fetch, Pull and Push

#### Network Command Overview

* We will call below mentioned commands as Network Commands:
	1. Clone - Copies a remote repository
	1. Fetch - Retrieves new objects and references from the remote repository
	1. Pull - Fetches and merges commits locally
	1. Push - Adds new objects and refereces to the remote repository


#### Fetch

* Syntax
	- git fetch `<repository>`

* The git fetch command retrieves new objects and references from another repository
* It mainly updates all of your tracking branch information
* If the repository argument isn't specified and you only have one remote repository set up locally, that remote depository will be used by default
* Git fetch allows you to download and view changes on the remote repository without having to immediately merge them into your current work
* ***A fetch does not impact the local branch labels***
* After the fetch, the tracking branch has the same commits as the remote repository's master branch.

* ***git status*** will inform you if your current local branch is behind the tracking branch.

#### Pull

* Syntx
	- git pull `[<repository>]` `[<branch>]`

* Git pull is a network command that combines git fetch and git merge FETCH_HEAD. 
* FETCH_HEAD is an alias for the tip of the tracking branch
* First new objects and references from the remote repository are fetched. 
* If new objects are added to the tracking branch, the tracking branch is merged into the local branch. The current branch is assumed if branch is not specified.

* This is similar to Topic merging into base branch

* Merging options
	1. `--ff` (***default***) --> fast-forward if possible, otherwise perform a merge commit
	1. `--no-ff` --> always include a merge commit
	1. `--ff-only` --> cancel instead of doing a merge commit
	1. `--rebase [--preserve-merges]`

* ***Stashing*** is a way to save files modified in the working tree for later access

* Git pull only aborts the merge if you have uncommitted changes that would be overwritten by git
* If you've modified a file that's not going to be replaced by git it lets the merge continue

* To git, the tracking branch is just another branch
* Anything that can happen when merging in a topic branch can happen when merging in a tracking branch


#### Push

* Syntax
	- git push `[-u]` `[<repository>]` `[<branch>]`
		* -u --> Track this branch(--set-upstream)

* The git push command is used to add commits to a remote repository
* You optionally specify the repository you want to push to. This can be a name like origin or URL
* Then optionally specify the branch name on the remote that you would like to push to
* You can use the -u option to set up the local packing branch with this remote branch

* A general rule is to fetch or pull before you do a push
	- You don't have to do this but if you try to push when you don't have the latest remote changes, the push will fail
	- If you execute a fetch and no objects are retrieved, we can safely push
	- If you're worried about a pull creating an unwanted merge commit, you can use the ff only option


### Rebasing

#### Rebasing Overview

* ***WARNING***
	1. Rebasing rewrite the commit history
	1. This should be done with caution
	1. General rule related to Rebase
		1. Do not rewrite history that has been shared with others
	1. If you've been working locally or if you know that no one else has used your branch you can safely Rebase it

* A rebase moves commits to a new parent or base

* Types of Rebase
	* A regular Rebase 
	* An interactive Rebase

* When rebasing, git applies the diffs to the new parent commit. This is called "Reapplying Commits"

* Rebasing is a Merge
	* Reapplying commits is a form of merge and is susceptible to merge conflicts


##### PROS
1. You can incorporate changes from the parent branch
	* You can use the new features/bugfixes
	* The tests on your branch are using more current code and because you are keeping up with the changes on other branches the eventual merge into the base branch will be easier

1. Another big advantage is that it avoids unnecessary merge commits
		- You can then have a very well-defined and clean commit history


##### CONS
1. Merge conflicts may need to be resolved
1. If you've already shared your commits that can cause problems because the commit IDs change in a Rebase
1. You are not preserving the commit history, you are rewriting the commit history


#### Executing Rebase

* There are two basic ways that you can execute a "git rebase"
	1. The ***first*** is to check out the feature branch and then execute "git rebase" specifying the upstream argument which is something like the master branch
		* This will change the parent of the currently checked out branch to the tip of the upstream branch
		* Syntax
			- git rebase `<upstream>`
				* Changes the parent of the currently checked out branch to `<upstream>`

	1. In the ***second*** option, you don't have to check out the feature branch first, you specify it as the second argument of the git rebase command.
		* Syntax
			- git rebase `<upstream>` `<branch>`
				* Checks out `<branch>` and changes its parent `<upstream>`
				* This is a convenience to avoid issuing two commands

***NOTE: UPSTREAM usually refers the parent branch of the rebased branch***


#### Rebasing with Merge Conflicts

* Rebasing is a form of merge, merge conflicts can arise
	* Execute "git rebase master" and git informs you that there is a merge conflict
	* You can execute "git status" and see that both commits have modified the same file in different ways
	* Then you fix the file resolving the conflict markers, add it to the staging area and then execute "git rebase continue."


* git rebase --continue --> Execute this command after solving the merge conflict and rebasing will continue
* git rebase --abort --> to get back to the pre-rebase state


### Rewriting History

#### Amending a commit

* Syntax
	- git commit --amend -m"NEW COMMIT MESSAGE"
	- git commit --amend --	no-edit --> no-edit to reuse the previous commit message

* This creates a new SHA-1 rewriting the history of the commit
* You can change the most recent commit, this includes
	1. Changing the commit message
	1. Changing the project files


#### Interactive Rebase

* Syntax
	- git rebase -i `<after-this-commit>`
		* Commits in the current branch `<after-this-commit>` are listed in an editor and can be modified
		* Childrens for `<after-this-commit>` can be modified

* Interactive rebase lets you edit commits using commands
	- The commits can belong to any branch and can in fact belong to a single branch
	- The commit history is changed, so in general do not use interactive rebase if you have shared commits

* Interactive Rebase Options and Commands
	1. Use commit as is --> p, pick --> use commit
	1. Edit the commit message --> r, reword --> use commit, but edit the commit message
	1. Stop and edit the commit --> e, edit --> use commit, but stop the amending
	1. Drop/delete the commit --> d, drop --> remove commit
	1. Squash --> s, squash --> use commit, but meld into previous commit
	1. Fixup --> f, fixup --> like "squash", but discard the commit's log message
	1. Execute shell commands, i.e. you can include shell cmds to execute during interactive rebase --> e, exec --> run command(the rest of line) using shell
	1. Reorder commits

* Squash a Commit
	1. Applies a newer (squashed) commit to an older commit
	1. Combines the commit messages
	1. Removes the newer commit

	NOTE: 
		- A fixup is like a squash, but the squashed commit's message is discarded.
		- Squashing the commits did not result in any work being lost

##### Squash vs Delete

* Squash
	- Combine this commit with the older commit, creating a single commit
		* The work of both commits is included

* Delete
	- No changes from this commit are applied
		* The diff/change is thrown out
		* The work of this commit is lost
		* Greater chance of a merge conflict


#### Squash Merges

* Syntax
	- git merge --squash `<branch-name>`

* A squash merge merges the tip of the feature branch under the tip of the base branch
	- There is a chance of merge conflict, as it is a merge
* Places the result in the staging area
* Then can be commited


* What happens to the feature commits?
	1. After the branch (featureX) label is deleted then related commits are no longer a part of named branch
		1. They will eventually be garbage collected by git. 
	1. A squash merge simplifies things but it also rewrites the commit history.

