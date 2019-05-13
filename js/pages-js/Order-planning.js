layui.use(['table', 'form'], function() {
	var table = layui.table;
	var form = layui.form;
	table.render({
		elem: '#demo',
		method: "get",
		async: false,
		url: "../json/test1.json",
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
					title: '销售开单编号'
				},
				{
					field: 'money',
					title: '订单金额(/元)'
				},
				{
					field: 'date',
					title: '订单日期'
				},
				{
					field: 'charge',
					title: '订单负责人'
				},
				{
					field: 'charge',
					title: '联系人'
				},
				{
					field: 'phone',
					title: '联系电话'
				},
				{
					field: 'appearance',
					title: '商品列表',
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