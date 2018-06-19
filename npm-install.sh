# config npm
echo '---> Set npm registry to Jukwaa private npm ...'
npm set registry http://localhost:4873
npm config set @types:registry https://registry.npmjs.org/
currentRegistry=$(npm get registry)
echo "---> current regisry is: $currentRegistry ..."

# get uer name
USERNAME=$USER
while true; do
    read -p "---> is ${USERNAME} your username (y/n): " yn
    case $yn in
        [Yy]* ) break;;
        [Nn]* ) echo -n '---> please input your username: '; read INPUTUSERNAME; USERNAME=$INPUTUSERNAME; break;;
        * ) echo "---> Please answer y or n: ";;
    esac
done

# tunneling
REMOTEHOST=localhost
REMOTEPORT=4873
TIMEOUT=1

if nc -w $TIMEOUT -z $REMOTEHOST $REMOTEPORT; then
    echo "---> Able to connect to ${REMOTEHOST}:${REMOTEPORT} ..."
else
    echo "---> Connection to ${REMOTEHOST}:${REMOTEPORT} failed. Reconnecting ..."
    ssh -Nf -L 4873:stghouzz-nodejs:4873 $USERNAME@bastion.staging.houzz.net
fi

JUKWAA_CORE_PATH=node_modules/jukwaa-core

if [ -L $JUKWAA_CORE_PATH ]; then
    echo "---> jukwaa-core is linked, please run git pull to get the latest"
    # rm -rf $JUKWAA_CORE_PATH/node_modules/
else
    echo "---> clean jukwaa-core"
    rm -rf $JUKWAA_CORE_PATH
fi

# downloading
echo '---> Start downloading packages ...'
npm install

echo '---> Start linking ...'
npm link

# reset npm
echo '---> Downloading finished, restore npm registry ...'
npm set registry https://registry.npmjs.org/
