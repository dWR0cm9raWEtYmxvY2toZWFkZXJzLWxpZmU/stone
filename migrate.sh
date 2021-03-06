local=/Users/mercury/code/work/stone/
remote=/Users/mercury/code/work/BlockGeek.io/blockgeek/web/

rm -r ./graphene
# gatsby build --prefix-paths
yarn build
mv public graphene

git add .
git commit -m 'graphene bundle update'
git push lab lazyload
git push origin lazyload

rm -rf ${remote}/graphene
cp -r ${local}/graphene ${remote}/graphene

cd ${remote}

git add .
git pull
git commit -m 'graphene bundle update'
git push origin master
