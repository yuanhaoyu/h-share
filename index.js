import Qshare from './lib/Qshare';
import ua from 'happy-ua';

const HandlerQshare = (config) => {
    setShareInfo({
        title: config.title,
        summary: config.summary,
        pic: config.pic,
        url: config.url,
        WXconfig: {
            swapTitleInWX: true, // 是否标题内容互换（仅朋友圈，因朋友圈内只显示标题）
            appId: '', // 公众号的唯一标识
            timestamp: '', // 生成签名的时间戳
            nonceStr: '', // 生成签名的随机串
            signature: '' // 签名
        }
    });
}

const HandlerCheckConfig = (config) => {
    if ( typeof config !== 'object') {
        console.error('config must to be an object!');
        return false;
    }
    return true;
}

export default (config) => {
    const enviorment = ua();
    if ( HandlerCheckConfig(config)) {
        switch ( enviorment ) {
            case 'mqq':
                HandlerQshare(config);
                break;
            default:
                break;
        }
    }
}