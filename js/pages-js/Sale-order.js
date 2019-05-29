layui.use(['table', 'form'], function() {
	var table = layui.table;
    var form = layui.form;
    function UrlSearch() { //获取url里面的参数
		var name, value;
		var str = location.href; //取得整个地址栏
		var num = str.indexOf("?")
		str = str.substr(num + 1); //取得所有参数   stringvar.substr(start [, length ]
		var arr = str.split("="); //各个参数放到数组里
		return arr[1];
    }
    var id = UrlSearch()
    var dataurl
    if(id == "1") {
        dataurl = "../json/Sale.json"
    }
    if(id == "2") {
        dataurl = "../json/Sale2.json"
    }
    if(id == "3") {
        dataurl = "../json/Sale3.json"
    }
    if(id == "4") {
        dataurl = "../json/Sale1.json"
    }
    console.log(id)
	table.render({
		elem: '#demo',
		method: "get",
		async: false,
		url: dataurl,
		//		contentType: 'application/json',
		//		headers: {
		//			'accessToken': getToken()
		//		},
		page: true,
		cols: [
			[{
					field: 'id',
					title: '序号',
					type: 'numbers'
				},
				{
					field: 'orderNumber',
					title: '订单编号'
				},
				{
					field: 'userNumber',
					title: '采购编号'
				},
				{
					field: 'date',
					title: '采购日期'
				},
				{
					field: 'purchase',
					title: '采购数量'
				},
				{
					field: 'Buyer',
					title: '采购员'
				},
				{
					field: 'phone',
					title: '联系电话'
				},
				{
					field: 'examine',
					title: '状态'
				},
				{
					field: 'appearance',
					title: '商品详情',
					toolbar: "#order_xq"
				},
				{
					field: 'appearance',
					title: '删除',
					toolbar: "#order_del"
				},
				{
					field: 'appearance',
					title: '修改',
					toolbar: "#order_update",

				},
				{
					field: 'appearance',
					title: '导出报表',
					toolbar: "#order_export",
					width: 200
				}
			]
		],
		toolbar: "#order_add",
		loading: true,
		parseData: function(res) {
			var arr;
			var code;
			var total;
			if(res.code == "0010") {
				code = 0;
				arr = res.data.list;
				total = res.data.total;
			}
			return {
				"code": 0,
				"msg": res.msg,
				"count": total,
				"data": arr
			};
		}
	})
	table.on('row(demo)', function(data) {
		var param = data.data;
		$(document).on('click', '#look', function() {
			sessionStorage.setItem('jsonId', param.id);
		})
	})
});