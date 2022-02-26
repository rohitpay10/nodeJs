var bhartipay = require('./index.js');
const http = require('http');
const { parse } = require('querystring');
const crypto = require("crypto");

const hostname = '127.0.0.1';
const port = 3000;
const bhartipay_payid = '1123511103105347';
const bhartipay_salt = 'a3be319f47804186';
const server = http.createServer((req, res) => {
    bhartipay.isProdMode(false);
    bhartipay.setCredentails(bhartipay_payid, bhartipay_salt);
    switch (req.url) {
        case "/":
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.write('<!DOCTYPE html>');
        res.write('<html>');
        res.write('<head>');
        res.write('<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />');
        res.write('<title>Bhartipay Demo Merchant Checkout Page</title>');
        res.write('<style type="text/css" media="screen">');
        res.write('body{width:100%;margin:0 auto;background-color:#e4eff5}');
        res.write('.signupbox{margin:20px auto 0;padding:0;font:normal 12px arial;color:#555;background:#fff;border:1px solid #d0d0d0;border-radius:5px;-webkit-box-shadow:-1px 3px 8px -1px rgba(0,0,0,0.75);-moz-box-shadow:-1px 3px 8px -1px rgba(0,0,0,0.75);box-shadow:-1px 3px 8px -1px rgba(0,0,0,0.75)}');
        res.write('.signup-headingbg{background:#194e84;background-image:-webkit-linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-image:linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-size:5px 5px;height:35px;border-bottom:1px solid #dadada;font:bold 16px Tahoma;color:#fff;vertical-align:middle}');
        res.write('.signuptextfield:focus{border-color:#66afe9;outline:0;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6)}');
        res.write('.signupselectfield {width: 100%;background: #fff;padding: 10px;height: 2.5em;border: #555;border: 1px solid #ccc;border-radius: 4px;}');
        res.write('.signupbutton{cursor:pointer;border-radius:5px}');
        res.write('.signupbutton,.signupbutton:hover{background-color:#449d44;border:1px solid #398439;width:40%;height:35px;font:bold 14px Tahoma;text-align:center;color:#fff;cursor:pointer;border-radius:5px}');
        res.write('.borderleftradius{border-top-left-radius:5px}');
        res.write('.borderrightradius{border-top-right-radius:5px}');
        res.write('.gradientbg{background-image:-ms-linear-gradient(top,#FEFEFF 0%,#BFD3E1 100%);background-image:-moz-linear-gradient(top,#FEFEFF 0%,#BFD3E1 100%);background-image:-o-linear-gradient(top,#FEFEFF 0%,#BFD3E1 100%);background-image:-webkit-gradient(linear,left top,left bottom,color-stop(0,#FEFEFF),color-stop(1,#BFD3E1));background-image:-webkit-linear-gradient(top,#FEFEFF 0%,#BFD3E1 100%);background-image:linear-gradient(to bottom,#FEFEFF 0%,#BFD3E1 100%)}');
        res.write('.form-control {width: 60%;padding: 4px;}');
        res.write('.labelfont {padding: 4px;text-align: right;font-weight: bold;}');
        res.write('.new {padding: 5rem;font: normal 12px arial;color: #555;}');
        res.write('.new table {width: 50rem;border:1px solid #d0d0d0;border-radius:5px;-webkit-box-shadow:-1px 3px 8px -1px rgba(0,0,0,0.75);-moz-box-shadow:-1px 3px 8px -1px rgba(0,0,0,0.75);box-shadow:-1px 3px 8px -1px rgba(0,0,0,0.75)}');
        res.write('.signuptextfield {width: 98%;padding: 5px;font-size: 12px;font-family: "Verdana",sans-serif;color: #555;border: 1px solid #ccc;border-radius: 4px;-webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);box-shadow: inset 0 1px 1px rgba(0,0,0,.075);-webkit-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;}');
        res.write('</style>');
        res.write('</head>');
        res.write('<body>');
        res.write('<div class="new">');
        res.write('<form action="/redirect" method="post">');
        res.write('<table border="0" align="center" cellpadding="0" cellspacing="0" class="gradientbg">');
        res.write('<thead>');
        res.write('<tr>');
        res.write('<td colspan="3" align="center" valign="middle"></td>');
        res.write('</tr>');
        res.write('<tr>');
        res.write('<td colspan="3" align="center" valign="middle" class="signup-headingbg borderleftradius borderrightradius">Demo Checkout Page</td>');
        res.write('</tr>');
        res.write('</thead>');
        res.write('<tr>');
        res.write('<td align="right" valign="middle">&nbsp;</td>');
        res.write('<td align="center" valign="middle">&nbsp;</td>');
        res.write('<td align="center" valign="middle">&nbsp;</td>');
        res.write('</tr>');
        res.write('<tr>');
        res.write('<td class="labelfont">PAY ID: </td>');
        res.write('<td class="form-control">');
        res.write('<input type="text" name="PAY_ID" class="signuptextfield" value="1123511103105347" autocomplete="off" readonly="" />');
        res.write('</td>');
        res.write('</tr>');
        res.write('<tr>');
        res.write('<td class="labelfont">MERCHANT NAME: </td>');
        res.write('<td class="form-control">');
        res.write('<input type="text" name="MERCHANTNAME" class="signuptextfield" value="Bhartipay Demo" autocomplete="off"/>');
        res.write('</td>');
        res.write('</tr>');
        res.write('<tr>');
        res.write('<td class="labelfont">ORDER ID: </td>');
        res.write('<td class="form-control">');
        res.write('<input type="text" name="ORDER_ID" class="signuptextfield" value="BHARTID1204191528" autocomplete="off" />');
        res.write('</td>');
        res.write('</tr>');
        res.write('<tr>');
        res.write('<td class="labelfont">AMOUNT: </td>');
        res.write('<td class="form-control">');
        res.write('<input type="text" name="AMOUNT" class="signuptextfield" value="1"  autocomplete="off"/>');
        res.write('</td>');
        res.write('</tr>');
        res.write('<tr>');
        res.write('<td class="labelfont">TXNTYPE: </td>');
        res.write('<td class="form-control">');
        res.write('<input type="text" name="TXNTYPE" class="signuptextfield" value="SALE" autocomplete="off" readonly="" readonly="" />');
        res.write('</td>');
        res.write('</tr>');
     
        res.write('<tr>');
        res.write('<td class="labelfont">CUSTOMER NAME: </td>');
        res.write('<td class="form-control">');
        res.write('<input type="text" name="CUST_NAME" class="signuptextfield" value="BHARTIPAY DEMO" autocomplete="off"/>');
        res.write('</td>');
        res.write('</tr>                   ');
        res.write('<tr>');
        res.write('<td class="labelfont">CUSTOMER ADDRESS: </td>');
        res.write('<td class="form-control">');
        res.write('<input type="text" name="CUST_STREET_ADDRESS1" class="signuptextfield" value="Gurgaon" autocomplete="off"/>');
        res.write('</td>');
        res.write('</tr>                   ');
        res.write('<tr>');
        res.write('<td class="labelfont">CUSTOMER ZIP: </td>');
        res.write('<td class="form-control">');
        res.write('<input type="text" name="CUST_ZIP" value="122016" class="signuptextfield" autocomplete="off"/>');
        res.write('</td>');
        res.write('</tr>');
        res.write('<tr>');
        res.write('<td class="labelfont">CUSTOMER PHONE: </td>');
        res.write('<td class="form-control">');
        res.write('<input type="text" name="CUST_PHONE" value="9999999999" class="signuptextfield" autocomplete="off"/>');
        res.write('</td>');
        res.write('</tr>');
        res.write('<tr>');
        res.write('<td class="labelfont">CUSTOMER EMAILID: </td>');
        res.write('<td class="form-control">');
        res.write('<input type="text" name="CUST_EMAIL" class="signuptextfield" value="test.user@bhartipay.com" autocomplete="off"/>');
        res.write('</td>');
        res.write('</tr>');
        res.write('<tr>');
        res.write('<td class="labelfont">PRODUCT DESC: </td>');
        res.write('<td class="form-control">');
        res.write('<input type="text" name="PRODUCT_DESC" class="signuptextfield" value="Demo Transaction" autocomplete="off"/>');
        res.write('</td>');
        res.write('</tr>');
        res.write('<tr>');
        res.write('<td class="labelfont">CURRENCY CODE: </td>');
        res.write('<td class="form-control">');
        res.write('<input type="text" name="CURRENCY_CODE" class="signuptextfield" value="356"autocomplete="off" readonly="" />');
        res.write('</td>');
        res.write('</tr>');
        res.write('<tr>');
        res.write('<td class="labelfont">RETURN URL: </td>');
        res.write('<td class="form-control">');
        res.write('<input type="text" name="RETURN_URL" class="signuptextfield" value="http://' + hostname + ':' + port + '/response" autocomplete="off"  readonly="" />');
        res.write('</td>');
        res.write('</tr>');
        res.write('<tr>');
        res.write('<td colspan="3" align="center" valign="middle">&nbsp;</td>');
        res.write('</tr>');
        res.write('<tr>');
        res.write('<td colspan="3" align="center" valign="middle">');
        res.write('<input type="hidden" name="payment_check" value="true">');
        res.write('<input type="submit" name="button" id="button" class="signupbutton" value="Pay Now" onclick="javascript:submitForm()"/>                     ');
        res.write('</td>');
        res.write('</tr>');
        res.write('<tr>');
        res.write('<td colspan="3" align="center" valign="middle">&nbsp;</td>');
        res.write('</tr>');
        res.write('</table>');
        res.write('</form>');
        res.write('</div>');
        res.write('</body>');
        res.write('</html>');
        res.end();
        break;
        case "/redirect":
        postData = '';
        if(req.method === 'POST') {
            collectRequestData(req, result => {
                if (result) {
                    var data = {
                        AMOUNT: parseInt(result.AMOUNT) * 100,
                        CURRENCY_CODE: 356,
                        CUST_NAME: result.CUST_NAME,
                        CUST_EMAIL: result.CUST_EMAIL,
                        CUST_PHONE: result.CUST_PHONE,
                        CUST_STREET_ADDRESS1: 'Vyapar Marg, Sector 4',
                        CUST_CITY: 'Noida',
                        CUST_STATE: 'Haryana',
                        CUST_COUNTRY: 'India',
                        CUST_ZIP: '201301',
                        CUST_SHIP_NAME: result.CUST_NAME,
                        CUST_SHIP_PHONE: result.CUST_PHONE,
                        CUST_SHIP_CITY: 'Noida',
                        CUST_SHIP_STATE: 'Haryana',
                        CUST_SHIP_COUNTRY: 'India',
                        CUST_SHIP_STREET_ADDRESS1: 'Vyapar Marg, Sector 4',
                        CUST_SHIP_ZIP: '201301',
                        ORDER_ID: result.ORDER_ID,
                        PAY_ID: bhartipay_payid,
                        PRODUCT_DESC: result.PRODUCT_DESC,
                        RETURN_URL: 'http://' + hostname + ':' + port + '/response',
                        TXNTYPE: 'SALE'
                    }
                    var transaction = bhartipay.createTransaction(data);
                    var gateway_url = bhartipay.getPaymentUrl();
                    var form_html = '<form method="post" action="'+gateway_url+'" name="payForm">';
                    var formKeys = Object.keys(transaction);
                    formKeys.forEach(function(key) {
                        form_html += '<input type="hidden" name="'+key+'" value="'+transaction[key]+'"/>';
                    });
                    form_html += '</form><script type="text/javascript">document.payForm.submit();</script>';

                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'text/html');
                    res.write('<!DOCTYPE html><html><head><title>Demo Checkout Page</title></head><body><center><h1>Please wait</h1><p>Do not refresh this page...</p></center>');
                    res.write(form_html);
                    res.write('</body></html>');
                    res.end();
                } else {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'text/html');
                    res.write('<!DOCTYPE html>');
                    res.write('<h2>Invalid Request</h2>');
                    res.end();
                }
            });
        } else {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.write('<h2>Invalid Request</h2>');
            res.end();
        }
        break;
        case "/response":
        
        postData = '';
        if(req.method === 'POST') {
            collectRequestData(req, result => {
                if (result) {
                    var response_html = '<table border="1">';
                    var resultKeys = Object.keys(result);
                    resultKeys.forEach(function(key) {
                        response_html += '<tr><td>'+key+'</td><td>'+result[key]+'</td></tr>';
                    });
                    response_html += '</table>';
                    response_html += '<h2>Decyrpted Data</h2>'
                    response_html += '<table border="1">';
                    const decrypted = decryptMessage(result.ENCDATA);
                    const arr = decrypted.split("~");
                    arr.forEach((row)=>{
                        const cols = row.split("=");
                        if(cols.length == 2){
                            response_html += '<tr><td>'+cols[0]+'</td><td>'+cols[1]+'</td></tr>';
                        }
                    })
                    response_html += '</table>';

                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'text/html');
                    res.write("<style>td{padding:1em}</style>");
                    res.write("<center style='margin:3rem;'>"+response_html+"</center>");
                    res.end();
                } else {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'text/html');
                    res.write('<!DOCTYPE html>');
                    res.write('<h2>Invalid Request</h2>');
                    res.end();
                }
            });
        } else {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.write('<h2>Invalid Request</h2>');
            res.end();
        }
        break;
    }
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});


// Request data helper
function collectRequestData(request, callback) {
    const FORM_URLENCODED = 'application/x-www-form-urlencoded';
    if (request.headers['content-type'] === FORM_URLENCODED) {
        let body = '';
        request.on('data', chunk => {
            body += chunk.toString();
        });
        request.on('end', () => {
            callback(parse(body));
        });
    } else {
        callback(null);
    }
}

function decryptMessage(message){
    const secret = bhartipay.credentails.merchant_hosted_key;
    const iv = secret.substring(0,16);
    var decryptor = crypto.createDecipheriv("AES-256-CBC", secret, iv);
    return decryptor.update(message, 'base64', 'utf8') + decryptor.final('utf8');
}