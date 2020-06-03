# Module 2 Assessment

#### Question 1

In Git, what is modeled as a directed acyclic graph (DAG)?

	A. The staging area.
[x]	B. The commit history.
	C. The working tree.

#### Question 2
How are Git commits connected?
	A. The staging area lists the connections.
[x]	B. A commit references its parent(s).
	C. A commit object contains the SHA-1 of its child or children.

#### Question 3
What is a Git ID?
[x]	A. The name of a Git object.
	B. The ID of the local repository.
	C. The user's name and email address.

#### Question 4
If a large file changes by one character, what would you expect to happen to its corresponding SHA-1 value?

[x]	A. It would change drastically.
	B. It would not change.
	C. It would slightly change.

#### Question 5
What do branch labels point to?
[x]	A. The most recent commit of a branch. ("the tip of the branch")
	B. The initial commit of a branch.
	C. Every commit of a branch.

#### Question 6
How many HEAD references are in a local repository?
	A. One for each branch label.
	B. One for each commit.
[x]	C. One.

#### Question 7
Which one of these statements is correct?
	A. A tag is another name for a branch label.
	B. The HEAD reference always points to a tag.
[x]	C. A tag always points to a specific commit.

#### Question 8
What happens when a branch is created?
	A. The HEAD reference changes.
	B. Commits are copied.
[x]	C. A branch label is created.

#### Question 9
Which one of these statements is correct?
	A. Checkout retrieves content from the remote repository.
[x]	B. Checkout updates the working tree and HEAD reference.
	C. Checkout prevents others from changing a branch.

#### Question 10
What does a detached HEAD mean?
[x]	A. The HEAD reference points directly to a commit SHA-1.
	B. The HEAD reference does not point to anything.
	C. The HEAD reference points to a branch label.

#### Question 11
What does "deleting a branch" immediately do?
[x]	A. Deletes a branch label.
	B. Deletes only the commits that are unique to the branch.
	C. Deletes all of the commits of the branch.

#### Question 12
Which one of the following statements is true?
[x]	A. Merging combines the work of branches.
	B. A merge always creates a new commit.
	C. A commit can only belong to one branch at a time.

#### Question 13
Which one of the following statements about fast-forward merges is true?
	A. The merge may change some commits.
[x]	B. The merge moves a branch label.
	C. The merge may result in a merge conflict.

#### Question 14
If Git informs you that a fast-forward merge is not possible, which one of these statements is most likely to be true?

	A. The checked out commit has multiple parents.
[x]	B. A commit was made on the base branch after the topic branch was created.
	C. The merge has merge conflicts that must be resolved first.

#### Question 15
Which one of these statements about a merge involving a merge commit is true?

	A. The merge is aborted if there are merge conflicts.
	B. A merge commit results in a linear commit history.
[x]	C. Git places the result of the merge into a new commit.


