local=/Users/mercurio/documents/work/stone/
remote=/Users/mercurio/documents/work/BlockGeek.io/blockgeek/web/

rm -r ./graphene
gatsby build --prefix-paths
mv public graphene

git add .
git commit -m 'graphene bundle update'
git push lab lazyload
git push origin lazyload

cd ../BlockGeek.io/blockgeek/web/graphene && git pull

rm -rf ${remote}/graphene
cp -r ${local}/graphene ${remote}/graphene

git add .
git commit -m 'graphene bundle update'
git push origin master
