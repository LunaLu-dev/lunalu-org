
  ng build --configuration production
  ssh -i "/Users/lunalu/keys/key" -p 22 webserver@192.168.1.69 "rm -rf /home/webserver/webserver/web/lunalu.org/www/dist"
  scp -i "/Users/lunalu/keys/key" -P 22 -r dist webserver@192.168.1.69:/home/webserver/webserver/web/lunalu.org/www/
  ssh -i "/Users/lunalu/keys/key" -p 22 webserver@192.168.1.69 "chmod 777 -R /home/webserver/webserver/web/lunalu.org/www/dist"
  echo "Done Webserver has been deployed to produsction server"

