#!/bin/bash
set -x # Show the output of the following commands (useful for debugging)

eval "$(ssh-agent -s)" # Start ssh-agent cache
chmod 600 /tmp/deploy # Allow read access to the private key
ssh-add /tmp/deploy # Add the private key to SSH

rsync -cvrz ./ deploy@165.227.197.233:/var/www/html/site