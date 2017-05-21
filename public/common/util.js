let util = {

    queryString: function (body) {
        let str = '';
        Object.keys(body).map(key => {
            str += `${key}=${body[key]}&`
        });
        return str;
    }
};

export default util;