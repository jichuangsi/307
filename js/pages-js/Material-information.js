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
					field: 'materielNumber',
					title: '物料编号'
				},
				{
					field: 'name',
					title: '物料名称'
				},
				{
					field: 'color',
					title: '物料颜色'
				},{
					field: 'specifications',
					title: '物料规格'
				},
				{
					field: 'charge',
					title: '负责人'
				},
				{
					field: 'purchase',
					title: '采购小组'
				},
				{
					field: 'appearance',
					title: '删除',
					toolbar: "#materiel_del"
				},
				{
					field: 'appearance',
					title: '修改',
					toolbar: "#materiel_update"
				}
			]
		],
		toolbar: "#materiel_add",
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
});