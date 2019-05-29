layui.use(['table', 'form'], function() {
	var table = layui.table;
	var form = layui.form;
	table.render({
		elem: '#demo',
		method: "get",
		async: false,
		url: "../json/jurisdiction.json",
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
					field: 'name',
					align: 'center',
					title: '职位名称'
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
					title: '详情',
					toolbar: "#order_xq",

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