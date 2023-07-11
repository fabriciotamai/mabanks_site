import axios from 'axios';
import { FormEvent } from 'react';

const SENDGRID_API_KEY = import.meta.env.VITE_SENDGRID_API_KEY;
const SENDER_EMAIL = import.meta.env.VITE_SENDER_EMAIL;

export function sendEmail(
  event: FormEvent<HTMLFormElement>,
  name: string,
  email: string,
  phone: string,
  message: string,
) {
  const headers = {
    Authorization: `Bearer ${SENDGRID_API_KEY}`,
    'Content-Type': 'application/json',
  };

  const data = {
    // Para quem será enviado e titulo
    personalizations: [
      {
        to: [
          {
            email: 'sobrelevel@gmail.com',
          },
        ],
        subject: `Mensagem enviada por: ${name}`,
      },
    ],

    // Email autorizado como sender no sendGrid
    from: {
      email: `${SENDER_EMAIL}`,
    },

    // Tipo da mensagem e o conteúdo da mesma
    content: [
      {
        type: 'text/html',
        value: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
    <html data-editor-version="2" class="sg-campaigns" xmlns="http://www.w3.org/1999/xhtml">
        <head>
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
          <!--[if !mso]><!-->
          <meta http-equiv="X-UA-Compatible" content="IE=Edge">
          <!--<![endif]-->
          <!--[if (gte mso 9)|(IE)]>
          <xml>
            <o:OfficeDocumentSettings>
              <o:AllowPNG/>
              <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
          </xml>
          <![endif]-->
          <!--[if (gte mso 9)|(IE)]>
      <style type="text/css">
        body {width: 600px;margin: 0 auto;}
        table {border-collapse: collapse;}
        table, td {mso-table-lspace: 0pt;mso-table-rspace: 0pt;}
        img {-ms-interpolation-mode: bicubic;}
      </style>
    <![endif]-->
          <style type="text/css">
        body, p, div {
          font-family: arial,helvetica,sans-serif;
          font-size: 14px;
        }
        body {
          color: #000000;
        }
        body a {
          color: #42ee99;
          text-decoration: none;
        }
        p { margin: 0; padding: 0; }
        table.wrapper {
          width:100% !important;
          table-layout: fixed;
          -webkit-font-smoothing: antialiased;
          -webkit-text-size-adjust: 100%;
          -moz-text-size-adjust: 100%;
          -ms-text-size-adjust: 100%;
        }
        img.max-width {
          max-width: 100% !important;
        }
        .column.of-2 {
          width: 50%;
        }
        .column.of-3 {
          width: 33.333%;
        }
        .column.of-4 {
          width: 25%;
        }
        ul ul ul ul  {
          list-style-type: disc !important;
        }
        ol ol {
          list-style-type: lower-roman !important;
        }
        ol ol ol {
          list-style-type: lower-latin !important;
        }
        ol ol ol ol {
          list-style-type: decimal !important;
        }
        @media screen and (max-width:480px) {
          .preheader .rightColumnContent,
          .footer .rightColumnContent {
            text-align: left !important;
          }
          .preheader .rightColumnContent div,
          .preheader .rightColumnContent span,
          .footer .rightColumnContent div,
          .footer .rightColumnContent span {
            text-align: left !important;
          }
          .preheader .rightColumnContent,
          .preheader .leftColumnContent {
            font-size: 80% !important;
            padding: 5px 0;
          }
          table.wrapper-mobile {
            width: 100% !important;
            table-layout: fixed;
          }
          img.max-width {
            height: auto !important;
            max-width: 100% !important;
          }
          a.bulletproof-button {
            display: block !important;
            width: auto !important;
            font-size: 80%;
            padding-left: 0 !important;
            padding-right: 0 !important;
          }
          .columns {
            width: 100% !important;
          }
          .column {
            display: block !important;
            width: 100% !important;
            padding-left: 0 !important;
            padding-right: 0 !important;
            margin-left: 0 !important;
            margin-right: 0 !important;
          }
          .social-icon-column {
            display: inline-block !important;
          }
        }
      </style>
          <!--user entered Head Start-->

         <!--End Head user entered-->
        </head>
        <body>
          <center class="wrapper" data-link-color="#42ee99" data-body-style="font-size:14px; font-family:arial,helvetica,sans-serif; color:#000000; background-color:#000000;">
            <div class="webkit">
              <table cellpadding="0" cellspacing="0" border="0" width="100%" class="wrapper" bgcolor="#000000">
                <tr>
                  <td valign="top" bgcolor="#000000" width="100%">
                    <table width="100%" role="content-container" class="outer" align="center" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td width="100%">
                          <table width="100%" cellpadding="0" cellspacing="0" border="0">
                            <tr>
                              <td>
                                <!--[if mso]>
        <center>
        <table><tr><td width="600">
      <![endif]-->
                                        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%; max-width:600px;" align="center">
                                          <tr>
                                            <td role="modules-container" style="padding:0px 0px 0px 0px; color:#000000; text-align:left;" bgcolor="#FFFFFF" width="100%" align="left"><table class="module preheader preheader-hide" role="module" data-type="preheader" border="0" cellpadding="0" cellspacing="0" width="100%" style="display: none !important; mso-hide: all; visibility: hidden; opacity: 0; color: transparent; height: 0; width: 0;">
        <tr>
          <td role="module-content">
            <p>Show What You Know!</p>
          </td>
        </tr>
      </table><table class="wrapper" role="module" data-type="image" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="uXsDxMnn1bRMmDcX8NB6rW">
          <tbody><tr>
            <td style="font-size:6px; line-height:10px; padding:30px 0px 30px 0px;" bgcolor="#000000" valign="top" align="center"><a href="https://#MaBanks"><img class="max-width" border="0" style="display:block; color:#000000; text-decoration:none; font-family:Helvetica, arial, sans-serif; font-size:16px; max-width:60% !important; width:60%; height:auto !important;" src="http://cdn.mcauto-images-production.sendgrid.net/5dd9039282867a6a/3a205929-e5fe-4a3a-b43a-629633f0ea41/1747x422.png" alt="Ma Banks" width="360" data-responsive="true" data-proportionally-constrained="false"></a></td>
          </tr>
        </tbody></table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="qk51Jjn4bm3rn2Yb31Dxzb" data-mc-module-version="2019-10-22">
          <tbody><tr>
            <td style="background-color:#ffffff; padding:50px 100px 10px 100px; line-height:22px; text-align:center;" height="100%" valign="top" bgcolor="#ffffff"><div><div style="font-family: inherit; text-align: center"><span style="font-size: 24px; font-family: arial black, helvetica, sans-serif"><strong>Mensagem enviada do formulário de </strong></span><span style="font-size: 24px; font-family: arial black, helvetica, sans-serif; color: #6d6d6d"><strong>contato</strong></span></div><div></div></div></td>
          </tr>
        </tbody></table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="4caa5774-cc9e-4f7e-a47a-4cf39a68fd19">
        <tbody>
          <tr>
            <td style="padding:18px 10px 2px 10px; line-height:22px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content"><div><h3 style=""><span style="font-size: 18px; color: #797979"><strong>Nome:</strong></span><span style="font-size: 18px"><strong> </strong></span><span style="font-size: 14px">${name}</span></h3>
    <h3 style=""><span style="font-size: 18px; color: #797979"><strong>E-mail:</strong></span><span style="font-size: 18px"><strong> </strong></span><span style="color: #000000; font-family: arial, helvetica, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 700; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space-collapse: preserve; text-wrap: wrap; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; float: none; display: inline; font-size: 14px">${email}</span></h3>
    <h3 style=""><span style="font-size: 18px; color: #797979"><strong>Telefone:</strong></span><span style="font-size: 18px"><strong> </strong></span><span style="font-size: 14px">${phone}</span></h3>
    <h3 style=""><span style="font-size: 18px; color: #797979">Mensagem:</span></h3><div></div></div></td>
          </tr>
        </tbody>
      </table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="2c3260ee-a9fd-4bce-8986-3f82b623b84b">
        <tbody>
          <tr>
            <td style="padding:0px 100px 18px 20px; line-height:22px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content"><div><div style="font-family: inherit"><span style="color: #000000; font-family: arial, helvetica, sans-serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 700; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space-collapse: preserve; text-wrap: wrap; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; float: none; display: inline">${message}</span></div><div></div></div></td>
          </tr>
        </tbody>
      </table><table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" role="module" data-type="columns" style="padding:0px 0px 0px 0px;" bgcolor="#FFFFFF" data-distribution="1">
        <tbody>
          <tr role="module-content">
            <td height="100%" valign="top"><table width="580" style="width:580px; border-spacing:0; border-collapse:collapse; margin:0px 10px 0px 10px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-0">
          <tbody>
            <tr>
              <td style="padding:0px;margin:0px;border-spacing:0;"></td>
            </tr>
          </tbody>
        </table></td>
          </tr>
        </tbody>
      </table><table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" role="module" data-type="columns" style="padding:0px 0px 0px 0px;" bgcolor="#FFFFFF" data-distribution="1">
        <tbody>
          <tr role="module-content">
            <td height="100%" valign="top"><table width="580" style="width:580px; border-spacing:0; border-collapse:collapse; margin:0px 10px 0px 10px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-0">
          <tbody>
            <tr>
              <td style="padding:0px;margin:0px;border-spacing:0;"><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="7dc8b5a5-5b79-4b6e-88a1-ae4b812cbeae">
        <tbody>
          <tr>
            <td style="padding:18px 0px 18px 0px; line-height:22px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content"><div><div style="font-family: inherit; text-align: center"><span style="font-size: 12px">Copyright © 2023, Ma Banks. Todos os direitos reservados.</span></div><div></div></div></td>
          </tr>
        </tbody>
      </table></td>
            </tr>
          </tbody>
        </table></td>
          </tr>
        </tbody>
      </table><table class="module" role="module" data-type="spacer" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="2ga5f7koD5ApvUfnqUK6aT">
          <tbody><tr>
            <td style="padding:0px 0px 30px 0px;" role="module-content" bgcolor="#000000">
            </td>
          </tr>
        </tbody></table><table class="module" role="module" data-type="divider" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="c3nRrjMndqXf1snYDFPSF9">
          <tbody><tr>
            <td style="padding:0px 0px 0px 0px;" role="module-content" height="100%" valign="top" bgcolor="#000000">
              <table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" height="3px" style="line-height:3px; font-size:3px;">
                <tbody><tr>
                  <td style="padding:0px 0px 3px 0px;" bgcolor="#42ee99"></td>
                </tr>
              </tbody></table>
            </td>
          </tr>
        </tbody></table></td>
                                          </tr>
                                        </table>
                                        <!--[if mso]>
                                      </td>
                                    </tr>
                                  </table>
                                </center>
                                <![endif]-->
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </div>
          </center>
        </body>
      </html>`,
      },
    ],
  };

  event.preventDefault();
  axios
    .post('https://api.sendgrid.com/v3/mail/send', data, { headers })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}
