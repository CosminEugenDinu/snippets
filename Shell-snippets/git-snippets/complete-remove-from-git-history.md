
# Completely remove file and all history tree from git

https://stackoverflow.com/questions/59727771/remove-file-from-git-repository-history

**First Install git-filter-repo**
https://github.com/newren/git-filter-repo
```bash
(
    git clone https://github.com/newren/git-filter-repo.git
    cd git-filter-repo
    # copy file git-filter-repo from repository to /usr/lib/git-core
    sudo cp git-filter-repo $(git --exec-path)/
    cd .. && rm -rf git-filter-repo
)
```
**Remove file with [Path based filtering](https://htmlpreview.github.io/?https://github.com/newren/git-filter-repo/blob/docs/html/git-filter-repo.html#EXAMPLES)**

```bash
# We want to remove settings.json
# cd to directory with .git
git filter-repo --path path/to/settings.json --invert-paths
# then add again your remote origin
git remote add origin git@github.com:YourGitHubAccount/your-repo.git
# force push changes
git push -f origin master

```
