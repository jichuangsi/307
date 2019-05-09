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
					field: 'purchase',
					title: '采购小组'
				},
				{
					field: 'charge',
					title: '负责人'
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
				},
				{
					field: 'appearance',
					title: '加入产品',
					toolbar: "#materiel_product"
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
	form.on('select(city)', function(data) {
		var param = data.value;
		console.log(param.city)
		if(param.city != "-1") {
			if(param == "0") {
				getMetal();
			} else if(param == "1") {
				getStoneMaterial()
			} else if(param == "2") {
				getRubber()
			}
		}
	});
	//获取金属属性
	function getMetal() {
		$('#product_add').empty();
		var divContent = "";
		divContent += '<div class="layui-form-item">';
		divContent += '<label class="layui-form-label">属性：</label>';
		divContent += '<div class="layui-input-inline" style="width: 60px;padding-right: 10px;">';
		divContent += '<input type="checkbox" name="" title="颜色" checked>';
		divContent += '</div>';
		divContent += '<div class="layui-input-inline" style="width: 60px;padding-right: 10px;">';
		divContent += '<input type="checkbox" name="" title="尺寸" checked>';
		divContent += '</div>';
		divContent += '<div class="layui-input-inline" style="width: 60px;padding-right: 10px;">';
		divContent += '<input type="checkbox" name="" title="大小" checked>';
		divContent += '</div>';
		divContent += '</div>';
		console.log(divContent)
		$('#product_add').append(divContent);
		form.render('checkbox');
	}
	//获取石料属性
	function getStoneMaterial() {
		$('#product_add').empty();
		var divContent = "";
		divContent += '<div class="layui-form-item">';
		divContent += '<label class="layui-form-label">属性：</label>';
		divContent += '<div class="layui-input-inline" style="width: 60px;padding-right: 10px;">';
		divContent += '<input type="checkbox" name="" title="重量" checked>';
		divContent += '</div>';
		divContent += '<div class="layui-input-inline" style="width: 60px;padding-right: 10px;">';
		divContent += '<input type="checkbox" name="" title="尺寸" checked>';
		divContent += '</div>';
		divContent += '<div class="layui-input-inline" style="width: 60px;padding-right: 10px;">';
		divContent += '<input type="checkbox" name="" title="大小" checked>';
		divContent += '</div>';
		divContent += '</div>';
		console.log(divContent)
		$('#product_add').append(divContent);
		form.render('checkbox');
	}
	//获取橡胶属性
	function getRubber() {
		$('#product_add').empty();
		var divContent = "";
		divContent += '<div class="layui-form-item">';
		divContent += '<label class="layui-form-label">属性：</label>';
		divContent += '<div class="layui-input-inline" style="width: 60px;padding-right: 10px;">';
		divContent += '<input type="checkbox" name="" title="颜色" checked>';
		divContent += '</div>';
		divContent += '<div class="layui-input-inline" style="width: 60px;padding-right: 10px;">';
		divContent += '<input type="checkbox" name="" title="尺寸" checked>';
		divContent += '</div>';
		divContent += '<div class="layui-input-inline" style="width: 60px;padding-right: 10px;">';
		divContent += '<input type="checkbox" name="" title="大小" checked>';
		divContent += '</div>';
		divContent += '</div>';
		console.log(divContent)
		$('#product_add').append(divContent);
		form.render('checkbox');
	}
});