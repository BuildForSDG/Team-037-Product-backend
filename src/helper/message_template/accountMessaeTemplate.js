const accountConfirmationEmailMessage = (data, link) => `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html
  xmlns="http://www.w3.org/1999/xhtml"
  xmlns:o="urn:schemas-microsoft-com:office:office"
  xmlns:v="urn:schemas-microsoft-com:vml"
>
  <head>
    <!--[if gte mso 9
      ]><xml
        ><o:OfficeDocumentSettings
          ><o:AllowPNG /><o:PixelsPerInch
            >96</o:PixelsPerInch
          ></o:OfficeDocumentSettings
        ></xml
      ><!
    [endif]-->
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
    <meta content="width=device-width" name="viewport" />
    <!--[if !mso]><!-->
    <meta content="IE=edge" http-equiv="X-UA-Compatible" />
    <!--<![endif]-->
    <title></title>
    <!--[if !mso]><!-->
    <!--<![endif]-->
  </head>
  <body>
  <table style="background:#fafafa;width:100%;">
  <tbody>
<tr style="padding:0; vertical-align:top; text-align:center;">
<td class="x_center" align="center" valign="top" style="word-break:break-word; padding:0; vertical-align:top; text-align:center; color:#333333; font-family:'Helvetica Neue',Helvetica,Arial,sans-serif; font-weight:normal; margin:0; line-height:20px; font-size:14px; border-collapse:collapse!important">
<center style="width:100%; min-width:580px">
<table class="x_row x_header" style="border-spacing:0; border-collapse:collapse; padding:0px; vertical-align:top; text-align:center; width:100%;">
<tbody>
<tr style="padding:0; vertical-align:top; text-align:center">
<td class="x_center" align="center" style="word-break:break-word; padding:0; vertical-align:top; text-align:center; color:#333333; font-family:'Helvetica Neue',Helvetica,Arial,sans-serif; font-weight:normal; margin:0; line-height:20px; font-size:14px; border-collapse:collapse!important">
<center style="width:100%; min-width:580px">
<table class="x_container" style="border-spacing:0; border-collapse:collapse; padding:0; vertical-align:top; text-align:inherit; width:580px; margin:0 auto">
<tbody>
<tr style="padding:0; vertical-align:top; text-align:center">
<td class="x_wrapper x_last" style="word-break:break-word; padding:0; vertical-align:top; text-align:center; color:#333333; font-family:'Helvetica Neue',Helvetica,Arial,sans-serif; font-weight:normal; margin:0; line-height:20px; font-size:14px; padding-right:0px; border-collapse:collapse!important">
<table class="x_twelve x_columns" style="border-spacing:0; border-collapse:collapse; padding:0; vertical-align:top; text-align:center; margin:0 auto; width:580px">
<tbody>
<tr style="padding:0; vertical-align:top; text-align:center">
<td style="word-break:break-word; padding:0px 0px 10px; vertical-align:top; text-align:center; color:#333333; font-family:'Helvetica Neue',Helvetica,Arial,sans-serif; font-weight:normal; margin:0; line-height:20px; font-size:14px; border-collapse:collapse!important">
<div class="x_mark" style="text-align:center"><a href="www.google.co.uk" target="_blank" style="text-align:center; color:#4183C4; text-decoration:none"><div style="display: inline-block; max-width: 99.9%;"><img src="http://www.iconsdb.com/icons/preview/caribbean-blue/infinity-xxl.png" alt="Occuly, Inc." width="102" height="28" class="x_center x_logo-wordmark" style="outline:none; text-decoration:none; width:auto; max-width:100%; border:none; margin:0 auto; float:none; padding:25px 0 17px; text-align:center"></div> </a></div>
</td>
<td class="x_expander" style="word-break:break-word; padding:0!important; vertical-align:top; text-align:center; color:#333333; font-family:'Helvetica Neue',Helvetica,Arial,sans-serif; font-weight:normal; margin:0; line-height:20px; font-size:14px; visibility:hidden; width:0px; border-collapse:collapse!important">
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</center>
</td>
</tr>
</tbody>
</table>
<table class="x_container" style="border-spacing:0; border-collapse:collapse; padding:0; vertical-align:top; text-align:inherit; width:580px; margin:0 auto">
<tbody>
<tr style="padding:0; vertical-align:top; text-align:center; border:1px solid #dddddd; border-radius:3px; background:#fff;">
<td style="word-break:break-word; padding:10px; vertical-align:top; text-align:center; color:#333333; font-family:'Helvetica Neue',Helvetica,Arial,sans-serif; font-weight:normal; margin:0; line-height:20px; font-size:14px; border-collapse:collapse!important">
<table class="x_row" style="border-spacing:0; border-collapse:collapse; padding:0px; vertical-align:top; text-align:center; width:100%; display:block">
<tbody>
<tr style="padding:0; vertical-align:top; text-align:center">
<td class="x_wrapper x_last" style="word-break:break-word; padding:0; vertical-align:top; text-align:center; color:#333333; font-family:'Helvetica Neue',Helvetica,Arial,sans-serif; font-weight:normal; margin:0; line-height:20px; font-size:14px; padding-right:0px; border-collapse:collapse!important">
<table class="x_twelve x_columns" style="border-spacing:0; border-collapse:collapse; padding:0; vertical-align:top; text-align:center; margin:0 auto; width:580px">
<tbody>
<tr style="padding:0; vertical-align:top; text-align:center">
<td class="x_no-padding" style="word-break:break-word; padding:0; vertical-align:top; text-align:center; color:#333333; font-family:'Helvetica Neue',Helvetica,Arial,sans-serif; font-weight:normal; margin:0; line-height:20px; font-size:14px; border-collapse:collapse!important">
<div class="x_hero-image-wrap" style="overflow:hidden; border-radius:3px 3px 0 0">
<a href="http://www.andela/sdg.com" target="_blank" style="color:#4183C4; text-decoration:none"><div style="display: inline-block; max-width: 99.9%;"><img src="http://res.cloudinary.com/devfortune/image/upload/v1589832481/dixykgumbcb65wbvbqex.png" alt="EmpowerFarmer" border="0" class="x_hero-image" style="margin:0; padding:0; outline:none; text-decoration:none; height:200px; max-width:100%; border:none; display:block"></div> </a></div>
</td>
<td class="x_expander" style="word-break:break-word; padding:0!important; vertical-align:top; text-align:center; color:#333333; font-family:'Helvetica Neue',Helvetica,Arial,sans-serif; font-weight:normal; margin:0; line-height:20px; font-size:14px; visibility:hidden; width:0px; border-collapse:collapse!important">
</td>
</tr>
</tbody>
</table>
<div class="x_panel" style="background:#ffffff; background-color:#ffffff;padding:0 20px 20px;width:538px">
<table class="x_twelve x_columns x_panel-contents" style="border-spacing:0; border-collapse:collapse; padding:0; vertical-align:top; text-align:center; margin:0 auto; width:540px">
<tbody>
<tr style="padding:0; vertical-align:top; text-align:center">
<td style="word-break:break-word; padding:0px 0px 10px; vertical-align:top; text-align:center; color:#333333; font-family:'Helvetica Neue',Helvetica,Arial,sans-serif; font-weight:normal; margin:0; line-height:20px; font-size:14px; border-collapse:collapse!important">
<div class="x_content">
<h2 class="x_content-heading" style="color:#333; font-family:'Helvetica Neue',Helvetica,Arial,sans-serif; font-weight:300; padding:0; margin:25px 0 20px; text-align:center; line-height:1; word-break:normal; font-size:22px">
Welcome ${data.firstName} ${data.lastName}</h2>
<p class="x_copy" style="margin:0 30px; word-wrap:normal; font-family:'Helvetica Neue',Helvetica,Arial,sans-serif; font-size:15px; font-weight:300; color:#333333; line-height:1.5; padding:0; text-align:center">
Welcome to <b>Empower Farmer</b>, you are one step away to finish setting up your account and start using <b>Empower Farmer</b>, confirm we’ve got the correct email <b><i>${
  data.email
}</i></b> for you.</p>
<div class="x_cta-button-wrap" style="padding:30px 0 20px; text-align:center; color:#EA8036">+
<a href=${link} target="_blank" style="color:#ffffff; text-decoration:none; display:inline-block; text-align:center; background:#51AB78; background-color:#51AB78; border-radius:5px; -webkit-border-radius:5px; padding:12px 44px; font-weight:bold; letter-spacing:normal; font-size:17px; font-family:'Helvetica Neue',Helvetica,Arial,sans-serif; margin:0 auto; width:auto!important">
Verify your email</a></div>
</div>
</td>
<td class="x_expander" style="word-break:break-word; padding:0!important; vertical-align:top; text-align:center; color:#333333; font-family:'Helvetica Neue',Helvetica,Arial,sans-serif; font-weight:normal; margin:0; line-height:20px; font-size:14px; visibility:hidden; width:0px; border-collapse:collapse!important">
</td>
</tr>
</tbody>
</table>
</div>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<table class="x_row x_layout-footer" style="border-spacing:0; border-collapse:collapse; padding:0px; vertical-align:top; text-align:center; width:100%">
<tbody>
<tr style="padding:0; vertical-align:top; text-align:center">
<td class="x_center" align="center" style="word-break:break-word; padding:0; vertical-align:top; text-align:center; color:#333333; font-family:'Helvetica Neue',Helvetica,Arial,sans-serif; font-weight:normal; margin:0; line-height:20px; font-size:14px; border-collapse:collapse!important">
<center style="width:100%; min-width:580px">
<table class="x_container" style="border-spacing:0; border-collapse:collapse; padding:0; vertical-align:top; text-align:inherit; width:580px; margin:0 auto">
<tbody>
<tr style="padding:0; vertical-align:top; text-align:center">
<td class="x_wrapper x_last" style="word-break:break-word; padding:0; vertical-align:top; text-align:center; color:#333333; font-family:'Helvetica Neue',Helvetica,Arial,sans-serif; font-weight:normal; margin:0; line-height:20px; font-size:14px; padding-right:0px; border-collapse:collapse!important">
<table class="x_twelve x_columns" style="border-spacing:0; border-collapse:collapse; padding:0; vertical-align:top; text-align:center; margin:0 auto; width:580px">
<tbody>
<tr style="padding:0; vertical-align:top; text-align:center">
<td style="word-break:break-word; padding:0px 0px 10px; vertical-align:top; text-align:center; color:#333333; font-family:'Helvetica Neue',Helvetica,Arial,sans-serif; font-weight:normal; margin:0; line-height:20px; font-size:14px; border-collapse:collapse!important">
<div class="x_footer-links" style="padding:20px 0; text-align:center">
<p class="x_footer-text" style="margin:0; word-wrap:normal; font-family:'Helvetica Neue',Helvetica,Arial,sans-serif; font-size:12px; font-weight:normal; color:#999; line-height:20px; padding:0; text-align:center">
<p class="x_footer-text" style="margin:0; word-wrap:normal; font-family:'Helvetica Neue',Helvetica,Arial,sans-serif; font-size:12px; font-weight:normal; color:#999; line-height:20px; padding:0; text-align:center">
</div>
</td>
<td class="x_expander" style="word-break:break-word; padding:0!important; vertical-align:top; text-align:center; color:#333333; font-family:'Helvetica Neue',Helvetica,Arial,sans-serif; font-weight:normal; margin:0; line-height:20px; font-size:14px; visibility:hidden; width:0px; border-collapse:collapse!important">
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</center>
</td>
</tr>
</tbody>
</table>
</center>
</td>
</tr>
</tbody>
</table>

  </body>
</html>
`;
export default accountConfirmationEmailMessage;
