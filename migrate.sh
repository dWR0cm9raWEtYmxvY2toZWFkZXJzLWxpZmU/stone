
git add .
git commit -m 'graphene bundle update'
git push lab lazyload

rm -r ./graphene
gatsby build --prefix-paths
mv public graphene
rm -rf ../BlockGeek.io/blockgeek/web/graphene
cp -r ./graphene ../BlockGeek.io/blockgeek/web/




cd ../BlockGeek.io/blockgeek/web/graphene
git add .
git commit -m 'graphene bundle update'
git push origin master
