<template>
	<view class="login-wrap" >
		<image src="../../static/image/icon/login-bg.png" class="login-head-bg" ></image>
		<view class="login-logo">
			<image :src="$store.state.logo" class="d-block" mode="aspectFit" style=""></image>
		</view>
		<view class="login-container text-white">
			<view class="d-flex-between-center">
				<text class="d-block font-size-48 my-8 font-weight-bold linear-gradient-text"
					style="line-height: 66rpx;">{{i18n.register}} </text>
					<text class="font-size-32 opacity-75" @click="showLanguage=true">{{i18n.selectLang}}</text>
			</view>

			 <u-subsection class="mt-40" :list="regNavList" :current="loginActive"
				@change="(index)=>{loginActive=index}"></u-subsection>

			<view class="">
				<!-- 手机和邮箱 -->
				<view class="login-input-group d-flex">
					<navigator url="/pages/common/area" class="d-flex-between-center font-weight-bold mr-30" style="width: 90rpx;" v-if="loginActive==0" >
						<text>{{area_code}}</text>
						<text class="iconfont icon-xiala font-size-20"></text>
					</navigator>
					<input type="digit" v-model="usestring" class="login-input" v-if="loginActive==0"
						:placeholder="i18n.mobile">
					<input type="text" v-model="usestring" class="login-input" v-else-if="loginActive==1"
						:placeholder="i18n.email">
					<input type="text" v-model="usestring" class="login-input" v-else-if="loginActive==2"
						:placeholder="i18n.account">
				</view>
				<!-- 验证码 -->
				<!-- <block>
					<view class="login-input-group" v-if="loginActive != 2">
						<input type="digit" v-if="loginActive==0" v-model="code" class="login-input"
							:placeholder="i18n.mobilecodePlaceholder">
						<input type="text" v-else-if="loginActive == 1" v-model="code" class="login-input" :placeholder="i18n.emailcodePlaceholder">
					
						<view class="send-code-button" :class="hasSend ? 'send' : ''" @click="getCode">
							<text class="d-block h-100 w-100" v-if="!hasSend">{{i18n.send}}</text>
							<text class="d-block h-100 w-100 text-white" v-else>{{seconds}}s</text>
						</view>
					</view>
				</block> -->
				

				<!-- 密码 -->
				<view class="login-input-group">
					<input type="password" v-model="password" class="login-input" :placeholder="i18n.password">
				</view>

				<!-- 重复密码 -->
				<view class="login-input-group">
					<input type="password" v-model="re_password" class="login-input" :placeholder="i18n.confirmPassword">
				</view>

				<!-- 邀请码 -->
				<view class="login-input-group">
					<input type="text" v-model="invitecode" class="login-input" :placeholder="i18n.invitecode">
				</view>

				<view class="login-btn-group">
					<view class="d-flex mb-20">
						{{i18n.hasaccount + i18n.go}}<navigator url="/pages/common/login" class="ml-4 text-warning">{{i18n.login}}
						</navigator>
					</view>
					<button class="warning-button" @click="register">{{i18n.register}}</button>
				</view>
			</view>
		</view>
		
		<view class="kefu" @click="$utils.jump('/pages/kefu/index')">
			<image src="../../static/image/icon/kefu.png" style="width: 36rpx;height: 41rpx;"></image>
		</view>
		
		<!-- 选择语言的popup -->
		<u-popup v-model="showLanguage" mode="bottom" length="60%" :title="i18n.selectLang">
			<view class="popup-list">
				<view class="popup-list-item" v-for="item in langs" :key="item.value" :class="{active : item.selected}"
					@click="setLang(item)">
					<text>{{item.name}}</text>
				</view>
			</view>
		</u-popup>
		
	</view>
</template>

<script>
	import {langs} from "./../setting/data.js"
	export default {
		data() {
			return {
				usestring: '',
				password: '',
				re_password:"",
				invitecode:"",
				code:"1688",
				// 当前是那种注册方式
				loginActive: 1,
				// 是否已发送验证码
				hasSend:false,
				area_code:null,
				seconds:120,
				secondsInterval:null,
				showLanguage:false,
				langs: null,
			};
		},
		onLoad(options) {
			const {code} = options
			if(code) this.invitecode = code
			
			const _this = this
			uni.setNavigationBarTitle({
				title:_this.$t("common.register")
			})	
		},
		onShow() {
			this.area_code = uni.getStorageSync('area_code') || "+1"
			this.setDefaultLang()
		},
		methods:{
			setDefaultLang() {
				let langsData = langs.map(el => {
					el.selected = false
					return el
				})
				const lang = this.$store.state.lang || 'en'
				const has = langsData.findIndex(item => item.value == lang)
				langsData[has].selected = true
				this.langs = langsData
			},
			//设置语言
			setLang(item) {
				let langs = this.langs.map(el => {
					el.selected = false
					if (el.value == item.value) el.selected = true
					return el
				})
				this.langs = langs
				this._i18n.locale = item.value
				this.lang = item
				uni.setStorageSync('lang', item.value)
				this.$store.commit('setLang', item.value)
				
				setTimeout(() => {
					this.showLanguage = false
				}, 200)
			},
			//发送验证码
			getCode(){
				// 设置节流,防止频繁点击
				this.$u.throttle(()=>{
					const {loginActive,usestring,hasSend,i18n,area_code} = this
					
					if(hasSend) return
					//如果是手机
					if(loginActive == 0){
						if(!this.$u.test.number(usestring) || !usestring){
							this.$utils.showToast(i18n.plsInputMobile)
							return false
						}
					}else{
						//如果是邮箱
						if(!this.$u.test.email(usestring) || !usestring){
							this.$utils.showToast(i18n.plsInputEmail)
							return false
						}
					}
					console.log(area_code,usestring)
					//发送接口
					if(loginActive == 0){
						   this.$u.api.setting.sendSmsCode(area_code,usestring).then(res => {
						this.$utils.showToast(res.message)
						//倒计时
						this.hasSend = true
						this.secondsInterval = setInterval(() => {
							this.seconds = this.seconds - 1
							if (this.seconds == 0) {
								clearInterval(this.secondsInterval)
								this.hasSend = false
								this.seconds = 120
							}
						}, 1000)
					})
					}else if(loginActive ==1){
						this.$u.api.user.sendMailCode(usestring).then(res => {
							this.$utils.showToast(res.message)
							//倒计时
							this.hasSend = true
							this.secondsInterval = setInterval(() => {
								this.seconds = this.seconds - 1
								if (this.seconds == 0) {
									clearInterval(this.secondsInterval)
									this.hasSend = false
									this.seconds = 120
								}
							}, 1000)
						})
					}
					
				},1000)
			},
			async register(){
				let {loginActive,usestring,code,invitecode,password,re_password,i18n} = this
				if(loginActive == 0){
					if(!this.$u.test.number(usestring) || !usestring){
						this.$utils.showToast(i18n.plsInputMobile)
						return false
					}
				}else if(loginActive == 1){
					//如果是邮箱
					if(!this.$u.test.email(usestring) || !usestring){
						this.$utils.showToast(i18n.plsInputEmail)
						return false
					}
				}else{
					if(usestring.length < 6){
						this.$utils.showToast(i18n.plsInputUsername)
						return false
					}
				}
				//判断验证码
				// if(loginActive != 2 && code.length < 4){
				// 	this.$utils.showToast(i18n.plsInputCode)
				// 	return false
				// }
				//判断密码
				if(password.length < 6){
					this.$utils.showToast(i18n.passwordPlaceholder)
					return false
				}
				if(re_password.length < 6){
					this.$utils.showToast(i18n.passwordPlaceholder)
					return false
				}
				if(this.$utils.charTest(password) ){
					this.$utils.showToast(this.$t("common.specialChart"))
					return false
				}
				//判断两次密码是否一致
				if(password != re_password){
					this.$utils.showToast(i18n.pwdInconsistent)
					return false
				}
				invitecode = this.$utils.charFilter(invitecode)
				//判断邀请码
				// if(invitecode.length < 4){
				// 	this.$utils.showToast(i18n.plsInputInviteCode)
				// 	return false
				// }
				if(loginActive == 0){
					this.$u.api.user.register(
						usestring,
						code,
						password,
						re_password,
						invitecode,
						'mobile'
					).then(res=>{
						this.$utils.showToast(res.message)
						// 跳转至登录页面
						setTimeout(()=>{
							uni.redirectTo({
								url:'/pages/common/login'
							})
						},300)
					})
				}else if(loginActive == 1){
					this.$u.api.user.register(
						usestring,
						code,
						password,
						re_password,
						invitecode,
						'email'
					).then(res=>{
						this.$utils.showToast(res.message)
						// 跳转至登录页面
						setTimeout(()=>{
							uni.redirectTo({
								url:'/pages/common/login'
							})
						},300)
					})
				}
				
				
				// try{
				// 	await this.$u.api.user.verifyMailCode(usestring,code)
				// 	//进行ajax
				// 	this.$u.api.user.register(
				// 		usestring,
				// 		code,
				// 		password,
				// 		re_password,
				// 		invitecode,
				// 		'email'
				// 	).then(res=>{
				// 		this.$utils.showToast(res.message)
				// 		// 跳转至登录页面
				// 		setTimeout(()=>{
				// 			uni.redirectTo({
				// 				url:'/pages/common/login'
				// 			})
				// 		})
				// 	})
				// }catch(e){
				// 	//TODO handle the exception
				// }
			}
		},
		computed: {
			i18n() {
				return this.$t("common")
			},
			regNavList() {
				return [{
						name: this.$t('common').mobile
					},
					{
						name: this.$t('common').email
					},
					/* {
						name: this.$t('common').account
					} */
				]
			}
		}
	}
</script>

<style lang="scss">
	.login-wrap {
		height: 100vh;
		background-color: #000000;

		.login-container {
			position: fixed;
			left: 0;
			right: 0;
			bottom: 0;
			padding: 50rpx;
			padding-bottom: 80rpx;
			background-color: $uni-color-black;
			border-radius: 50rpx 50rpx 0 0;
			min-height: 70vh;
		}
	}

	.send-code-button{
		position: absolute;
		height: 58rpx;
		line-height: 58rpx;
		@extend .font-size-28;
		border-radius: 30rpx;
		background-color: $uni-color-warning;
		padding: 0 40rpx;
		right: 0;
		bottom: 32rpx;
		transition: all .3s ease 0s;
		color: #fff;
		&.send{
			background-color: rgba(0,0,0,.05);
			color: #333;
		}
	}
	
	// 弹出层列表
	.popup-list {
		.popup-list-item {
			height: 96rpx;
			line-height: 96rpx;
			padding: 0 30rpx;
			@extend .font-size-32;
			position: relative;
			display: flex;
			align-items: center;
	
			&:before {
				content: "";
				position: absolute;
				left: 30rpx;
				right: 30rpx;
				bottom: 0;
				height: 2rpx;
				background-color: #efefef;
			}
	
			&.active {
				background-color: #f2f6ff;
	
				&:after {
					content: "";
					width: 36rpx;
					height: 20rpx;
					background-image: url('./../../static/image/icon/select.png');
					background-size: cover;
					position: absolute;
					right: 80rpx;
					top: 50%;
					margin-top: -10rpx;
				}
			}
		}
	}
	
</style>
