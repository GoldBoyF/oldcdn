require('../less/list.less');
require('pagination');

$(function () {
    $('#pagination-demo').twbsPagination({
        totalPages: 35,
        visiblePages: 7,
        first: '首页',
        prev: '上一页',
        next: '下一页',
        last: '尾页',
        onPageClick: function (event, page) {
            $('#page-content').text('Page ' + page);
        }
    });
});