import md5 from 'crypto-js/md5';
const loadGravatar = (email: string) => {
    const gravatarUrl = 'https://www.gravatar.com/avatar/';
    // let hashGravatar = crypto.createHash('md5').update(email).digest("hex");
    let hashGravatar = md5(email);
    let url = gravatarUrl + hashGravatar + '?d=mp&s=50';
    return url;
};

export default loadGravatar;
