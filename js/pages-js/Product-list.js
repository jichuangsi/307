layui.use(['table', 'form'], function() {
	var table = layui.table;
	var form = layui.form;
	table.render({
		elem: '#demo',
		method: "get",
		async: false,
		url: "../json/data.json",
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
					field: 'number',
					title: '客户产品编号'
				},
				{
					field: 'name',
					title: '品名'
				},
				{
					field: 'color',
					title: '颜色'
				},

				{
					field: 'specifications',
					title: '规格'
				},
				{
					field: 'count',
					title: '数量'
				},
				{
					field: 'pic',
					title: '图片',
					templet: '#img',
					align: 'center',
					style: 'height:100px;'
				},
				{
					field: 'appearance',
					title: '查看物料',
					align: 'center',
					toolbar: "#productr_see"
				}
			]
		],
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
			renderTable();
		})
	});
	renderTable = function() {
		table.render({
			elem: '#materiel',
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
						field: 'number',
						title: '物料编号'
					},
					{
						field: 'name',
						title: '物料名称'
					},
					{
						field: 'color',
						title: '物料颜色'
					},
					{
						field: 'specifications',
						title: '物料规格'
					},
					{
						field: 'number',
						title: '产品编号'
					},
					{
						field: 'purchase',
						title: '采购小组'
					}
				]
			],
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
	}

});