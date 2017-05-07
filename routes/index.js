
/*
 * GET home page.
 */

exports.index = function (req, res) {
    res.render('index', { title: 'Express', year: new Date().getFullYear() });
};

exports.gorusoneri = function (req, res) {
    res.render('gorusoneri', { title: 'About', year: new Date().getFullYear(), message: 'Your application description page' });
};

exports.iletisim = function (req, res) {
    res.render('iletisim', { title: 'Contact', year: new Date().getFullYear(), message: 'Your contact page' });
};
