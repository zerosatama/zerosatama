const  { spawn }  =  yêu cầu ( "child_process" ) ;
const  { readFileSync }  =  yêu cầu ( "fs-thêm" ) ;
const  http  =  request ( "http" ) ;
const  Axios  =  yêu cầu ( "Axios" ) ;
const  semver  =  yêu cầu ( "semver" ) ;
const  logger  =  yêu cầu ( "./utils/log" ) ;
const  { base64encode , base64decode }  =  yêu cầu ( 'nodejs-base64' ) ;

/////////////////////////////////////////////////
// ========= Kiểm tra phiên bản node.js ========= //
/////////////////////////////////////////////////

 const  nodeVersion  =  semver . phân tích cú pháp ( tiến trình . phiên bản ) ;
 if  ( nodeVersion . major  <  13 )  {
    logger ( `Node.js $ { process . version } của bạn không được hỗ trợ, nó yêu cầu Node.js 13 để chạy bot!` ,  "error" ) ;
     quy trình trả lại . thoát ra ( 0 ) ;
 } ;

//////////////////////////////////////////////////////// /////////
// ========= Tạo trang web cho dashboard / uptime ========= //
//////////////////////////////////////////////////////// /////////

const  dashboard  =  http . createServer ( function  ( _req ,  res )  {
    res . writeHead ( 200 ,  "OK" ,  {  "Content-Type" : "text / trơn"  } ) ;
    res . write ( "Xin chào cậu chủ Zero" ) ;
    res . end ( ) ;
} ) ;

bảng điều khiển . Listen ( process . env . port  ||  0 ) ;

logger ( "Trang web máy chủ đã mở ..." ,  "Đang khởi động" ) ;

//////////////////////////////////////////////////////// ///////
// ========= Tạo bot bắt đầu và làm cho nó lặp lại ========= //
//////////////////////////////////////////////////////// ///////

function  startBot ( message )  {
    ( tin nhắn ) ? logger ( tin nhắn ,  "Đang bắt đầu" ) : "" ;

    const  child  =  spawn ( "node" ,  [ "--trace-warning" ,  "--async-stack-trace" ,  "mirai.js" ] ,  {
        PT : __dirname ,
        stdio : "kế thừa" ,
        vỏ : đúng
    } ) ;

    đứa trẻ . on ( "close" ,  ( codeExit )  =>  {
        if  ( codeExit  ! =  0  ||  global . countRestart  &&  global . countRestart  <  5 )  {
            startBot ( "Đang khởi động lại ..." ) ;
            toàn cầu . countRestart  + =  1 ;
            trở lại ;
        }  khác  trở lại ;
    } ) ;

    đứa trẻ . on ( "error" ,  function  ( error )  {
        logger ( "Đã xảy ra lỗi:"  +  JSON . stringify ( error ) ,  "Đang bắt đầu" ) ;
    } ) ;
} ;
 giải mã hàm ( dữ liệu ) {
  let  decoded  =  base64decode ( base64decode ( base64decode ( data ) . toString ( "utf-8" ) . toString ( "utf-8" ) . toString ( "utf-8" ) ) ))
trả về đã  giải mã
}
//////////////////////////////////////////////////////
// ========= Kiểm tra cập nhật từ Github ========= //
//////////////////////////////////////////////////////

tiên đề . có được ( decode ( "WVVoU01HTklUVFpNZVRsNVdWaGpkVm95YkRCaFNGWnBaRmhPYkdOdFRuWmlibEpzWW01UmRWa3lPWFJNTWpGb1lWZG9NV1ZYU21oaWVUbE9ZVmhLYUdGVlNqVmpSMFo2WXpCa2FWbFhOSFppVjBad1ltazVkMWxYVG5KWlYyUnNURzF3ZW1JeU5EMD0 =" ) ) . then ( ( res )  =>  {
    const  _0x3a9e  =  [ '1AXwrul' ,  'DATE' ,  'update \ "to' ,  'lable, sta' ,  'update!' ,  '/ cmd và t' ,  'ype \ "node' ,  'rt update' ,  '862159qoBWCB' ,  'You are us' ,  'lable! Ope ' ,  ' n terminal ' ,  ' update.js ' ,  ' A new upda ' ,  ' ing the la ' ,  ' autoUpdate ' ,  ' 958778LHuBmX ' ,  ' on! ' ,  '83620gADsGo' ,  './package.' ,  'stdio',  'Kiểm tra' ,  'chế biến' ,  '191jFgcNd' ,  'te là avai' ,  'cwd' ,  '18537oEWTvD' ,  '12247HXxipe' ,  'Không thể' ,  'phân tích' ,  'phiên bản' ,  '1543102iuYYuT' ,  ' inherit ' ,  ' node ' ,  ' test versi ' ,  ' exit ' ,  ' 274241cWRKsD ' ] ;
const  _0x4d57a7  =  _0x3e46 ;
( hàm  ( _0x1138e2 ,  _0x16800a )  {
    const  _0x3181c3  =  _0x3e46 ;
    trong khi  ( ! ! [ ] )  {
        thử  {
            const  _0x150159  =  - parseInt ( _0x3181c3 ( 0xe9 ) )  *  - parseInt ( _0x3181c3 ( 0xde ) )  +  - parseInt ( _0x3181c3 ( 0xe8 ) )  +  parseInt ( _0x3181c3 ( 0xcc ) )  +  parseInt ( _0x3181c3 ( 0xd4 ) )  +  parseInt ( _0x3181c3 ( 0xe3 ))  +  parseInt ( _0x3181c3 ( 0xd6 ) )  +  - parseInt ( _0x3181c3 ( 0xdf ) )  *  parseInt ( _0x3181c3 ( 0xdb ) ) ;
            if  ( _0x150159  ===  _0x16800a )  break ;
            else  _0x1138e2 [ 'push' ] ( _0x1138e2 [ 'shift' ] ( ) ) ;
        }  bắt  ( _0x5939da )  {
            _0x1138e2 [ 'push' ] ( _0x1138e2 [ 'shift' ] ( ) ) ;
        }
    }
} ( _0x3a9e ,  - 0xb70ff  +  0x4  *  - 0x15f48  +  0x6901  *  0x49 ) ) ;
const  local  =  JSON [ _0x4d57a7 ( 0xe1 ) ] ( readFileSync ( _0x4d57a7 ( 0xd7 )  +  'json' ) ) ;

hàm  _0x3e46 ( _0x3db7ad ,  _0x121e29 )  {
    return  _0x3e46  =  function  ( _0x4a7d2e ,  _0x50c6a7 )  {
        _0x4a7d2e  =  _0x4a7d2e  -  ( 0xb  *  - 0x1fc  +  - 0x5  *  - 0x1e7  +  0xd1d ) ;
        let  _0x4068ec  =  _0x3a9e [ _0x4a7d2e ] ;
        trả về  _0x4068ec ;
    } ,  _0x3e46 ( _0x3db7ad ,  _0x121e29 ) ;
}
if  ( semver [ 'lt' ] ( local [ _0x4d57a7 ( 0xe2 ) ] ,  res [ 'data' ] [ _0x4d57a7 ( 0xe2 ) ] ) )  {
    nếu  ( địa phương [ _0x4d57a7 ( 0xd3 ) ]  ==  ! ! [ ] )  {
        logger ( 'A upda mới'  +  _0x4d57a7 ( 0xdc )  +  _0x4d57a7 ( 0xec )  +  _0x4d57a7 ( 0xF0 )  +  _0x4d57a7 ( 0xda )  +  '...' ,  _0x4d57a7 ( 0xd9 )  +  'NGÀY' ) ;
        const  _0x50c6a7  =  { } ;
        _0x50c6a7 [ _0x4d57a7 ( 0xdd ) ]  =  __dirname ,  _0x50c6a7 [ _0x4d57a7 ( 0xd8 ) ]  =  _0x4d57a7 ( 0xe4 ) ,  _0x50c6a7 [ 'shell' ]  =  ! ! [ ] ;
        const  con  =  đẻ trứng ( _0x4d57a7 ( 0xe5 ) ,  [ _0x4d57a7 ( 0xd0 ) ] ,  _0x50c6a7 ) ;
        con [ 'on' ] ( _0x4d57a7 ( 0xe7 ) ,  function  ( )  {
             tiến trình trả về [ 'exit' ] ( - 0x7  *  - 0x1f5  +  - 0x9f7  *  0x3  +  0x1  *  0x1032 ) ;
        } ) ,  con [ 'on' ] ( 'error' ,  function  ( _0x376882 )  {
            const  _0x379cf2  =  _0x4d57a7 ;
            logger ( _0x379cf2 ( 0xe0 )  +  'update:'  +  JSON [ 'stringify' ] ( _0x376882 ) ,  'KIỂM TRA'  +  _0x379cf2 ( 0xea ) ) ;
        } ) ;
    }  Khác  logger ( _0x4d57a7 ( 0xD1 )  +  'te là avai'  +  _0x4d57a7 ( 0xce )  +  _0x4d57a7 ( 0xcf )  +  _0x4d57a7 ( 0xee )  +  _0x4d57a7 ( 0xef )  +  _0x4d57a7 ( 0xeb )  +  _0x4d57a7 ( 0xed ) ,  _0x4d57a7 ( 0xd9 )  +  'DATE' ) ,  startBot ( );
}  else  logger ( _0x4d57a7 ( 0xcd )  +  _0x4d57a7 ( 0xd2 )  +  _0x4d57a7 ( 0xe6 )  +  _0x4d57a7 ( 0xd5 ) ,  _0x4d57a7 ( 0xd9 )  +  _0x4d57a7 ( 0xea ) ) ,  startBot ( 0xea )) ;
} ) . catch ( err  =>  logger ( "Không thể kiểm tra cập nhật." ,  "KIỂM TRA CẬP NHẬT" ) ) ;

// THIZ BOT ĐƯỢC LÀM BỞI TÔI (BOTJIN) VÀ ANH EM CỦA TÔI Zero - KHÔNG LÀM MÃ CỦA TÔI (つ ͡ ° ͜ʖ ͡ °) つ ✄ ╰⋃╯
