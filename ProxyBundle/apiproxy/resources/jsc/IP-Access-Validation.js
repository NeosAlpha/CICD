var ip2long = function(ip){
    var components;

    if(components = ip.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/))
    {
        var iplong = 0;
        var power  = 1;
        for(var i=4; i>=1; i-=1)
        {
            iplong += power * parseInt(components[i]);
            power  *= 256;
        }
        return iplong;
    }
    else return -1;
};

var inSubNet = function(ip, subnet)
{   
    var mask, base_ip, long_ip = ip2long(ip);
    if( (mask = subnet.match(/^(.*?)\/(\d{1,2})$/)) && ((base_ip=ip2long(mask[1])) >= 0) )
    {
        var freedom = Math.pow(2, 32 - parseInt(mask[2]));
        return (long_ip > base_ip || long_ip === base_ip) && ((long_ip < base_ip + freedom - 1) || (long_ip === base_ip + freedom - 1));
    }
    else return false;
};

// IP config code starts from here

var enable_ip_whitelist=parseInt(context.getVariable('enable_ip_whitelist'));

if(enable_ip_whitelist){
    
var ip = context.getVariable('proxy.client.ip'); // fetch Client IP run time

var mask =context.getVariable('whitelist_ip'); // fetch Client IP from custom attribute with CIDR notation
   
   if (!inSubNet(ip, mask)) {
  throw new Error("Illegal IP: " + ip); // Throw new error
} 

}

