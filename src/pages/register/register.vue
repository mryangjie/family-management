<template>
	<div class="page-wrapper">
		<vue-particles></vue-particles>
		<div class="middle-wrapper">
			<div class="middle-wrapper-left">
				<div class="img-t1"></div>
				<div class="img-t2"></div>
			</div>
			<div class="middle-wrapper-right">
				<div class="m-right-tit">
					<img src="../../assets/images/zhuce.png" alt="">
				</div>
				<div class="m-right-content">
					<div class="toLogin" @click="goLogin"><i class="el-icon-arrow-left"></i>返回登录</div>
					<el-form class="reset-form-input reset-form-required" :model="loginForm" :rules="rules" ref="loginForm">
						<el-form-item label="手机号" prop="phoneCode">
							<el-input placeholder="请输入手机号" v-model="loginForm.phoneCode"></el-input>
						</el-form-item>
						<el-form-item label="密码" prop="password">
							<el-input placeholder="请输入密码" v-model="loginForm.password" show-password></el-input>
						</el-form-item>
						<el-form-item label="验证码" prop="verCode" class="ver-line">
							<el-input placeholder="请输入验证码" v-model="loginForm.verCode"></el-input>
							<el-button class="ver-btn" @click="getCode" :disabled="codeDisabled">{{codeText}}</el-button>
						</el-form-item>
					</el-form>
					<div class="submit-line">
						<el-button class="submit-btn" type="primary" @click="submitForm('loginForm')">下一步</el-button>
					</div>
				</div>

			</div>
		</div>
	</div>

</template>

<script>
	import VueParticles from '@/components/VueParticles.vue';
	import {mapGetters,mapActions} from 'vuex';
	import {checkTel,isEmail} from '@/store/utils/validate.js'

	export default {
		data() {
			return {
				loginForm: {
					phoneCode: '',
					password: '',
					verCode: ''
				},
				rules: {
					phoneCode: [{
						required: true,
						message: '手机号不能为空',
						trigger: 'blur',
					}, ],
					password: [{
						required: true,
						message: '密码不能为空',
						trigger: 'blur'
					}, ],
					verCode: [{
						required: true,
						message: '验证码不能为空',
						trigger: 'blur'
					}, ]
				},
				codeNo: '',
				codeText: '发送验证码',
				codeDisabled: false,
			}
		},
		components: {
			VueParticles
		},
		methods: {
			...mapActions(['getRegistrationCodeRequest']),
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						if (this.codeNo != this.loginForm.verCode) {
							this.$message({
								message: '验证码输入有误',
								type: 'warning'
							})
							return
						}

						this.$router.push({
							name: 'completInfo',
							params: {
								phoneCode: this.loginForm.phoneCode,password: this.loginForm.password,verCode: this.loginForm.verCode
							}
						});

					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
			getCode() {
				if (this.codeDisabled) return
				if (!checkTel(this.loginForm.phoneCode)) {
					this.$message({
						message: '请输入正确的手机号',
						type: 'warning'
					})
					return
				}

				this.getRegistrationCodeRequest({
					type: 1,
					mobile: this.loginForm.phoneCode,
				}).then(res => {
					if (res.code == '200') {
						this.codeNo = res.data.code;
						this.codeDisabled = true
						let i = 5;
						let st = setInterval(() => {
							i--
							this.codeText = i + '秒'
							if (i < 0) {
								this.codeDisabled = false;
								this.codeText = '发送验证码';
								window.clearInterval(st);
							}
						}, 1000);
					} else {
						this.$message({
							message: res.msg,
							type: 'error'
						})
					}
				})
			},
			goLogin() {
				this.$router.push({
					name: 'login'
				})
			},

		},
		mounted() {

		}
	}
</script>

<style lang="scss">
	@import '@/assets/scss/config.scss';

	.middle-wrapper-right {
		position: relative;

		.toLogin {
			position: absolute;
			top: 30px;
			left: 30px;
			font-size: 12px;
			cursor: pointer;
			color: $submit_btn_color;

			&:hover {
				color: $submit_btn_color_active
			}
		}

		.m-right-tit {
			img {
				width: 155px
			}
		}

		.m-right-content {
			.ver-line {
				position: relative;

				.ver-btn {
					color: #fff;
					position: absolute;
					right: 0;
					top: 22px;
					padding: 10px 20px;
					background: $submit_btn_color;

					&:hover {
						background: $submit_btn_color_active
					}
				}
			}
		}

	}
</style>
