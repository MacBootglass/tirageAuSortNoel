apt-get update

#Install Sass
gem install sass
gem install sass-json-vars

#Install nodejs & npm
apt-get install -y nodejs npm
ln -s /usr/bin/nodejs /usr/local/bin/node

#Update node & npm
npm install npm -g
npm cache clean -f
npm install -g n
n 4.6.0

#Install gulp
npm install --global gulp-cli

#Install Docker
apt-get install -y apt-transport-https ca-certificates
apt-key adv --keyserver hkp://p80.pool.sks-keyservers.net:80 --recv-keys 58118E89F3A912897C070ADBF76221572C52609D
echo "deb https://apt.dockerproject.org/repo ubuntu-xenial main" >  /etc/apt/sources.list.d/docker.list
apt-get update
apt-get install -y linux-image-extra-$(uname -r) linux-image-extra-virtual
apt-get install -y docker-engine
service docker start
groupadd docker
usermod -aG docker $USER

#Install docker-compose
curl -L https://github.com/docker/compose/releases/download/1.8.0/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose
