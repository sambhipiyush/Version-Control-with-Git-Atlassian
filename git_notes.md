# Version Control with GIT


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

Project Directory	| 1. Working Tree --> A single commit's directories and files.
 					| 2. Staging Area/Index --> List of Files that are planned for next commit
					| 3. Local Repository --> Contains all the commits that are made for the project. These are version history of the project.

Remote Directory	| 4. Remote Repository --> Contains the commits of the project. It is located in Data Center or the Cloud. This is often considered the source of truth or official state of the project. 


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




