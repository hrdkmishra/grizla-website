# How to contribute to the project

1. Download git bash from [here](https://git-scm.com/downloads)

2. Clone the repository 
```git clone https://github.com/hrdkmishra/grizla-website.git ```

3. Add your changes to the repository
``` git add "file name" ```

4. Commit your changes
``` git commit -m "your message" ```

5. Push your changes to the repository
``` git push```

6. Keep your repository updated
``` git pull ```

# For branch commit setup

1. Paste this in your git bash to generate ssh key
``` ssh-keygen -o -t rsa -C "your@email.com" ```

2. Then cat the public ssh key ,you can see the path while generating ssh key
```cat file_path```

3. Go to github setting -> goto SSH and GPG key -> add new SSH key -> give any title name and paste the public ssh key from step 2 -> Done

4. Clone the repository via SSH
```git clone  git@github.com:hrdkmishra/grizla-website.git```

5. Create your specific branch
```git branch -c your_name```

6. Switch to your branch
```git checkout your_name```

7. Add your changes to the repository
``` git add "file name" ```

8. Commit your changes
``` git commit -m "your message" ```

9. Push your changes to your branch
``` git push origin HEAD```

## Note 

- Put comment on your code so that it is easy to understand
- You only need to perfom step 5 once
- to check if which branch you are currently do
```git branch```
- dont push in the master branch

 
