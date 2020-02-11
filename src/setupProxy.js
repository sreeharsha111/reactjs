const proxy = require("http-proxy-middleware");

module.exports=function(app){
    app.use(express.static('public'),
        proxy(" /slot/2685",{
            target:"localhost:8080",
            secure: false,
            changeOrigin:true
        })
    )
}