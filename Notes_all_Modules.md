Version Control with Git
========================

by Atlassian

# Module 1

## What is GIT?

* Git is a Distributed version control system
* Open source software (OSS)
	* Has a vibrant community and ecosystem
* Adapts to many types of projects and workflows
	* Works well for large or small projects.


## What is Git Repository?

* Git repository is a series of snapshots, or commits

### CMD TO CHECK GIT VERSION

* git --version

### Basic GIT Syntax

* git [COMMAND] [`--flags`] [arguments]
	
	Example: git status
			 git status --short
			 git add file.txt

### GIT help command

* git help [COMMAND]
* git [COMMAND] -h  --> Concise help for command

### GIT Command Reading Help

* git fakecommand (-p|--path) [`<id>`] [`--`] [`<paths>`...]
	* -f or --flag --> Change the command's behavior
	* | --> OR
	* [] --> Optional argument
	* <> --> Placeholders, which are replaced with actual name/path/etc. when using command
	* [`<id>`] --> Opional Placeholder
	* () --> Grouping
	* --  --> Disambiguates the command
	* ... --> Multiple occurances possible


### Setting Config in GIT

* git config [--local|--global|--system] `<key>` [`<value>`]
	* The --system flag applies to every repository for all users on your computer.
	* The --global flag applies to every repository that you use on your computer.
		* git config --global user.name "sambhipiyush"
		* git config --global user.email "piyush.sambhi07@icloud.com"
	* No flag or --local applies to only the current repository (Highest precedence)


### Reading GIT Configuration

* git config `<key>`
	* git config user.name
	* git config user.email


### Set preferred GIT editor

* To set your preferred git editor:
	* git config --global core.editor vim


## Git Locations

#### ***Project Directory***
> 1. Working Tree --> A single commit's directories and files.
> 2. Staging Area/Index --> List of Files that are planned for next commit
> 3. Local Repository --> Contains all the commits that are made for the project. These are version history of the project.

#### ***Remote Directory***
> 4. Remote Repository --> Contains the commits of the project. It is located in Data Center or the Cloud. This is often considered the source of truth or official state of the project. 


### GIT Cmd to INITIALIZE/Create Repository

* git init 
	This will create a .git directory in your folder. (hidden directory)


### GIT Basic Cmds

* git status --> To view the status of files in working tree or staging area.
	* git status -s --> short description

* git add --> To add content to the staging area, as Staged content is a part of next commit.
	* Syntax: 
		* git add `<filename>`
		* git add `<directory>`
		* git add * --> wildcard for all files
		* git add . --> Add all untracked or modified files at once.

* git commit --> Adds stages content to the local repository as a commit.
	* Syntax:
		* git commit `<filename>`
		* git commit -m "INITIAL COMMIT" --> for short commit message

* git log --> To view repositories commit history.
	* Syntax:
		* git log
		* git log --oneline
		* git log --oneline --graph
		* git log --oneline -2 --> to check 2 most recent commits.
		* git log --oneline --graph --all --> Add --all shows all of the local branches.

## Remote Repository

A remote repository is usually a professionally managed repository that is hosted in a data center or in the cloud. It often acts as the central source of truth or official state of the project. And it often integrates with other systems like issue trackers and continuous delivery pipelines.

* Hosted options for remote git repositories include Bitbucket and GitHub.
* On-premise options include Bitbucket Server, GitHub Enterprise, as well as some open source on-premise options. 

* A remote repository is often a bare repository. Because nobody works with the repository locally, there is usually no working tree or staging area on a remote repository. 
* The root directory of a remote repository is similar to the ".git" directory in a local repository.


### Clone Remote Repository

* git clone --> cmd used to create local copy of remote repository.
	* Syntax:
		* git clone `<url/to/projectname.git>` [local-project-name]


### Get Remote Repository Information

* git remote --> Displays information about remote repositories associated with the local repository.
	* Syntax:
		* git remote --verbose

### Add Remote Repository to Local Repository

* git remote add `<name>` `<url>`
	* Example:
		* git remote add origin https://github.com/sambhipiyush/repoa.git

### Push Commits to Local Repository to Remote Repository

* git push --> Writes commits for a branch from local repository to remote repository.
	* Syntax:
		* git push [-u] [`<repository>`] [`<branch>`]
			* `<repository>` --> can be a name (shortcut) to URL
			* -u --> track this branch (--set-upstream)

1. All commits belong to a branch.
1. By default, there is a single branch and it is called master.



# Module 2

## Git's Graph Model


#### Brief Introduction of Graphs

* A way to model connected things.
* Graphs contains nodes connected by lines. Lines are called edges.

* Directed graph - Nodes are connected in a certain direction.
	* Arrow direction - Direction depends on how you define the relationship.
		- Types:
			* Cyclic
			* Acyclic - No cycles or non-circular

* Directed Acyclic Graph (DAG)
	- Contains nodes connected with arrows and has no cycles.

#### GIT's DAG

* GIT models the relationship of commits with a DAG (Directed Acyclic Graph)
* The arrow point at a commit's parent(s)

* Branch occurs if a commit has more than one child
* Merge occues when a commit has more than one parent

* Git Graphs look like:
	
	`* 4242139 (HEAD -> master, origin/master, origin/HEAD) Added important Shell cmds, most frequently used cmds`\
	`* a9de421 Updated and Added Random queries which were used while performing QC for UDB Test.`\
	`* 2427f2a Updated Script:`\
	`*   a1b7621 Merge branch 'master' of https://github.com/sambhipiyush/dedupe_qc_scripts`\
	`|\  `\
	`| * 2dfd595 Aesthetic Changes`\
	`| * 611e736 Aesthetic Changes`\
	`* | 042c6a4 Updated Script: Sample Message`\
	`* | 1601cf7 Updated Script: Sample Message`\
	`|/  `\
	`* 46b95ce Aesthetic changes in README.md`\
	`* 2a39c29 Added contact information in README.md file.`\
	

### GIT ID's

#### GIT Objects

* Commit - A small text file
* Annotated Tags - A permanent reference to a commit
* Tree - Directories and filenames in the project
* Blob - The content of a file in the project

### GIT IDs

* Git ID is the name of a GIT object
* 40-character hexadecimal string
* Also known as object ID, SHA-1, hash and checksum

* Git IDs are SHA-1 values
* This 40-character hexadecimal string is the result of a mathematical computation based on the content
* Statistically speaking, the SHA-1 value is unique for a given piece of content. The exact same content will always result in the same SHA-1 value, but it is virtually impossible to find two different content files that produce the same SHA-1 value. 

* CMD to create an SHA-1 for any content:
	* Syntax: 
		* git hash-object `<file-name>`

### GIT References

* It is a user-friendly name that points to :
	- a commit SHA-1 hash
	- another reference
		- known as symbolic reference

* CMD to use reference instead of SHA-1 hashes:
	* Syntax:
		* git show HEAD

* ***Master*** is the default name of the main branch in the repository

* ***Branch Label***
	* Points to the most recent commit in the branch. That commit is commonly called the tip of the branch
	* Implemented as References

> ***Note*** the subtle difference between a branch and a branch label. All three commits belong to the master branch, even though the master branch label is only at the tip of the branch. Since a branch in Git is implemented as a tiny branch label, branches are extremely simple to implement and use very few resources.

* ***HEAD*** 
	* HEAD is a reference to the current commit
	* It usually points to the branch label of the current branch. Because it only points to the current commit and there can only be one current commit
	* There is only one HEAD reference in your local repository.

* Appending TILDE(~) to GIT IDs and REFERENCES
	* Referencing prior commits with the ~ and ^ characters. In git commands, the ~ character can be appended to git IDs and references to refer to prior commits.
		* Like:
			- ~ or ~1 --> parent
			- ~2 or ~~ --> parent's parent

* Appending CARET(^) to GIT IDs and REFERENCES
	* Referes to a parents in a merge commit (^parentnum)
	* ^ or ^1 --> first parent to the commit
	* ^2 --> second parent of a merge commit
	* ^^ --> first parent's first parent

* ***Tilda and Caret*** characters can be combined arbitrarily to access any commit. Even in a tree with many branches and merges. 
	* Example: 
		* `HEAD~^ 2` refers to the parent's second parent


#### TAGS

* Reference/Label attacked to a specific commit.
* Types:
	- Lightweight Tag
		* A simple reference to a commit.
	- Annotated Tag
		* A full GIT object that references
		* Includes tag author information, tag date, tag message, the commit ID.
		* Optionally can be signed and verified with GNU GUARD

* In general, annotated tags are recommended over lightweight tags because they are true Git objects and offer more capabilities.
		 

#### Lightweight Tag

* To tag a commit with a lightweight tags:
	* Syntax:
		* git tag `<tagname> [<commit>]`
* `<commit>` defaults to HEAD


#### Annotated Tag

* To tag a commit with a annotated tags:
	* Syntax:
		* git tag -a [-m `<msg>` | -F `<file>`] `<tagname>` [`<commit>`]
* `<commit>` defaults to HEAD

* `git show` displays the tag object information followed by the commit information.

#### Tags and Remote Repositories

* `git push` does not automatically transfer tags to the remote repository
* To transfer a single tag:
	- `git push <remote> <tagname>`
* To transfer all your tags:
	- `git push <remote> --tags`


##### What does HEAD -> master mean? 
* HEAD is a reference to the current commit.
* The content of that commit is in your working tree. master is the name of the branch, and this commit is the tip of the branch, so this is the master branch label. The arrow represents that the HEAD reference points to the master branch label, which points to the SHA-1 of the commit.


### BRANCHES

#### Branch Overview

* All commits of a project belong to a branch. 
* By default, commit belong to the master branch. 
* A branch is a set of commits starting with the most recent commit in the branch and tracing back to the project's first commit.

##### Benfits of Branches

1. Fast and easy to create
1. Enable experimentation
1. Enable team development
1. Support multiple project versions


##### Types of Branches

1. Topic
	* Examples: A feature, bug fix, a hotfix, a configuration change, etc

1. Long-lived
	* Examples: master, develop, release, etc


* ***View Branches in GIT***
	* Syntax:
		* git branch --> to see the list of branches present


#### Creating a Branch

* Syntax:
	* git branch `<branch-name>`

* Creating a branch simply creates a new branch label reference.
* We then create a feature X branch off of the most recent master commit, by creating a feature X branch label pointing to that commit. 


#### Checkout

* Syntax:
	* git checkout `<branch_or_commit>`
	* Example:
		* git checkout branch_sample

* Check out is usually related to branches and does two main things. 
	1. First, it switches the current commit which is the commit that the HEAD reference points to, to the checked out branch label or commit.
	1. The second thing that checkout does, is it updates the working tree with the files from the checked out commit.

* Example:
	* if we were on the master branch and then checked out the feature X branch, the HEAD reference changes from pointing to the master branch label to pointing to the feature X branch label.

* To create and checkout branch in single command:
	* Syntax:
		* git checkout -b `<branch-name>`
	* This command is only for new branches. It fails if the branch already exists

#### Detached HEAD

* Checking out a commit rather than a branch leads to a detached HEAD state. 
	* This means that instead of the HEAD reference pointing to a branch label, HEAD points directly to the SHA-1 of a commit
	* So a detached HEAD means that the HEAD reference is detached from a branch label

* How to fix Detached HEAD?
	- Temporarily viewing the files of a commit while in a detached HEAD state is perfectly fine
	- However, if you want to work on files of the checked out commit and create new commits, you should create a branch on that commit first


#### Deleting a BRANCH Label

* Deleting a branch really just means that you're deleting a branch label
* Deleting a branch label normally does not delete any commits, at least not right away
* Syntax:
	* git branch -d `<branch-name>`

- Dangling commits
	* Any branch which is deleted without merging changes to MASTER branch, then Dangling commit situation arises.
	* Dangling commits are removed by GITs garbage collector
	* Syntax:
		* git branch -D `<branch-name>`

- Recover Deleted Branch
	* Syntax:
		* git reflog --> returns a local list of recent HEAD commits
		* git checkout -b `<branch-name>` `<commit-SHA-1-string>`

	* Git reflog is a command that returns a local list of recent HEAD commits. This list is in the local .git directory, but not in the repository. So this only works locally.


### MERGING

#### Merging Overview

* Merging combines the work of independent branches
* This involves merging a topic branch, such as the featureX branch, into what is called a base branch, such as the master branch
* The base branch is usually a longer running branch than the topic branch

#### Main types of Merges

1. Fast-forward merge
1. Merge commit
1. Squash merge --> This rewrites the commit history
1. Rebase --> This rewrites the commit history

#### Fast Forward Merge

* It moves the base branch label to the tip of the topic branch
* A fast forward merge is possible only if no other commits have been made to the base branch since the topic branch was created.
* If any commits have been added to the base branch, it will not allow you to perform a fast-forward merge

* Resulting commit history is linear in case of Fast-Forward merge

* ***Steps for Fast-Forward merge:***
	1. git checkout master
	1. git merge `<branch-name>`
		* attempting a fast forward merge is the default
	1. git branch -d `<branch-name>` --> Assuming merge is successful.


#### Merge Commits

* A merge commit combines the work of the tips of the feature and base branches and places the result into a single merge commit
* A merge commit always has multiple parents
* Because of non-linear commit graph, it's easy to see the branch in the commit history
* Combining the work of multiple commits may result in what's called a ***merge conflict***, if both branches change the same thing in different ways

* Git will automatically attempt to create a merge commit if the merge is not fast forwardable.

* ***Steps for Merge Commit:***
	1. git checkout master
	1. git merge `<branch-name>`
		* accept or modify the merge message
	1. git branch -d `<branch-name>` --> Assuming merge is successful.

* ***Steps for Merge Commit (forefully):***
	* In some cases, you might have a situation where a merge is fast forwardable, but you would rather have a merge commit
		* Example: Your team's policy might be to always merge feature branches using merge commits. This is so you can clearly see the branches in the commit graph

	1. git checkout master
	1. git merge --no-ff `<branch-name>` --> A no fast-forward merge means that a merge commit will always be created, even if the merge is fast-forwardable
		* accept or modify the merge message
	1. git branch -d `<branch-name>` --> Assuming merge is successful.



# Module 3

