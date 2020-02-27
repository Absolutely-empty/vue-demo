<template>
	<div id="login">
		<div class="login-warp">
			<ul class="menu-tab">
				<li v-for="(item,index) in menuTab" :key="index"  :class="{'current':item.current}" @click="toggleMenu(item)">{{item.txt}}</li>
				
			</ul>
			<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="login-form">
				
			  <el-form-item prop="username" class="item-from">
				  <label>邮箱</label>
				<el-input type="text" v-model="ruleForm.username" autocomplete="off" size="small"> </el-input>
			  </el-form-item>
			  
			  <el-form-item  prop="password"  class="item-from">
				  <label>密码</label>
				<el-input type="password" v-model="ruleForm.password" autocomplete="off" size="small"></el-input>
			  </el-form-item>
			  
			  <el-form-item  prop="password"  class="item-from" v-if="model == 'register'">
			  				  <label>确认密码</label>
			  				<el-input type="password" v-model="ruleForm.repassword" autocomplete="off" size="small" ></el-input>
			  </el-form-item>
			  
			  <el-form-item  prop="code"  class="item-from">
				  <label>验证码</label>
				  
				  <el-row :gutter="20">
				    <el-col :span="15">
						<el-input v-model.number="ruleForm.code" size="small"></el-input>
					</el-col>
				    <el-col :span="9">
						<el-button type="success" class="block" >获取验证码</el-button>
					</el-col>
				  </el-row>

				  
			  </el-form-item>
			  
			  <el-form-item>
				<el-button type="danger" @click="submitForm('ruleForm')" class="block login-btn">提交</el-button>
			  </el-form-item>
			  
			</el-form>
			
			
			
		</div>


	</div>
</template>


<script>
	import {stripscript} from '@/utils/validate.js'
	export default{
		name:"login",
		  
		data(){
			var checkUsername = (rule, value, callback) => {
				if (value === '') {
				  callback(new Error('请输入邮箱'));
				} 
				  callback();
			};
			var checkCode = (rule, value, callback) => {
				if (!value) {
				  return callback(new Error('验证码不能为空'));
				}
				setTimeout(() => {
				  if (!Number.isInteger(value)) {
					callback(new Error('请输入数字值'));
				  } 
					callback();
				}, 1000);
			};
			var validatePassword = (rule, value, callback) => {
				if (value === '') {
				  callback(new Error('请输入密码'));
				} 
				  
				  callback();
			};

			return {
				menuTab:[
					{txt:"登录",current:true,type:"login"},
					{txt:"注册",current:false,type:"register"},
				],
				model:'login',
				
				ruleForm: {
				  username: '',
				  password: '',
				  code: '',
				  repassword:''
				},
				rules: {
				  username: [
					{ validator: checkUsername, trigger: 'blur' }
				  ],
				  password: [
					{ validator: validatePassword, trigger: 'blur' }
				  ],
				  code: [
					{ validator: checkCode, trigger: 'blur' }
				  ]
				},
				
			}
		},
		created(){},
		mounted() {
			
		},
		methods:{
			toggleMenu(data){
				this.menuTab.forEach(elem=>{
					elem.current = false;
				});
				data.current = true;
				
				this.model = data.type;
				
				
			},
		  submitForm(formName) {
			this.$refs[formName].validate((valid) => {
			  if (valid) {
				alert('submit!');
			  } else {
				console.log('error submit!!');
				return false;
			  }
			});
		  }
			
			
		},
		props:{
			
		},
		watch:{}
			
		
		
		
		
	} 

</script>

<style lang="scss" scoped>
	#login{
		height: 100vh;
		background-color: #344a5f;
	}
	.login-warp{
		width: 330px;
		margin:auto;
	}
	.menu-tab{
		text-align: center;
		li{
			display: inline-block;
			width: 88px;
			line-height: 36px;
			font-size: 14px;
			color: #FFF;
			border-radius: 2px;
			cursor: pointer;
		}
		.current{
			background-color: rgba(0,0,0,0.1);
		}
	}
	.login-form{
		margin-top: 29px;
		label{
			display: block;
			margin-bottom: 3px;
			font-size: 14px;
			color: #fff;
		}
	}
	.item-from{
		margin-bottom: 13px;
	}
	.block{
		width: 100%;
		display: block;
		
	}
	.login-btn{
		margin-top: 19px;
	}
</style>
