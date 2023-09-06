
<template> 
	<view class="home px-36">
		<view class="d-flex justify-content-between py-24 align-items-center overflow-hidden box-shadow position-relative" style="z-index: 1;">
			<!-- 我的 -->
			<navigator url="/pages/setting/setting">
				<image src="/static/image/nft/ca5ef4d8-dc73-43ba-9b42-f0ed45929ac5.png" style="width: 20px; height: 20px;"></image>
			<!-- 	<text class="iconfont icon-wode2 font-size-36 text-white font-weight-bold"></text> -->
			</navigator>
			<!-- 网站标题 -->
			<text class="font-size-36 w-75 text-center line-1 linear-gradient-text">{{$store.state.site_name}}</text>
			<!-- 扫一扫，站内信，联系客服 -->
			<text class="iconfont icon-icon_A text-white font-size-36" @click="showLanguage=true"></text>
		</view>

	
      <!-- 安全锁 -->
		  <!-- <view class="css-1rob6du">
		   <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" fill="none" class="css-1ouueae">
		    <path fill-rule="evenodd" clip-rule="evenodd" d="M7 8v2H5v11h14V10h-2V8A5 5 0 007 8zm7.5 2V8a2.5 2.5 0 00-5 0v2h5zm-1 8v-5h-3v5h3z" fill="currentColor"></path>
		   </svg>
		   <view data-bn-type="text" class="css-1ldm553">
		    URL verification:
		   </view>
		   <view data-bn-type="text" dir="ltr" class="css-mx5ldy">
		    <span data-bn-type="text" class="css-13n52y">https://</span>gedexpro.com
		   </view>
		  </view> -->


	<!-- 导航 -->
		
		<view class="mt-24 position-relative" style="z-index: 1;">
			<view class="d-flex align-items-center text-white" style="opacity: .3;">
				<text class="mr-16">{{i18n.totalAssetsEquivaleng}}</text>
				<text class="mr-26">({{$store.state.fiat.currency_code}})</text>
				<text class="iconfont icon-yanjing_xianshi" style="position: relative;top: 4rpx;"></text>
			</view>
			<view class="d-flex justify-content-between text-white align-items-center mt-6">
				<text class="font-size-56">{{(convert * $store.state.fiat.rate).toFixed(2)}}</text>
				<!-- <text :color="$baseColor" class="mr-20 isreal" @click="$utils.setReal(`/pages/index/index`)" v-if="isreal==0" >{{$t("real")}}</text>
				<text :color="$baseColor" class="mr-20 isreal" @click="$utils.setReal(`/pages/index/index`)" v-if="isreal==1">{{$t("demo")}}</text> -->
				<!-- <text class="iconfont icon-gengduo1"></text> -->
			</view>
			
			<swiper style="height: 240rpx;   background-color: #181A20 !important; " class="bg-black text-white box-shadow border-radius-20 mt-20" :autoplay="false" :indicator-dots="true" :indicator-active-color="$downColor">
				<swiper-item v-for="(el,index) in homeNav">
					<view class="py-10" style="height: 312rpx; ">
						<view class="d-flex flex-wrap">
							<view v-for="item in homeNav[index]" @click="homeNavJump(item.url,item.open_type)"
								class="w-25 text-center py-22" :key="item.icon">
								<image :src="`../../static/image/icon/${item.icon}.png`" class="d-block mx-auto" style="width: 46rpx;height: 46rpx;" mode="">
								</image>
								<text class="d-block font-size-22 mt-16">{{item.name}}</text>
							</view>
						</view>
					</view>
				</swiper-item>
				<data-loading v-if="!homeNav.length"></data-loading>
			</swiper>
		</view>

		<!-- 公告 -->
		<view class="mt-22">
			<u-notice-bar mode="vertical" :list="news" bg-color="#181A20" :color="$baseColor" border-radius="20" :duration="3000" @click="clickNoticeBar">
			</u-notice-bar>
		</view>

		<!-- 广告 -->
		<view class="mt-22" v-if="false && swiper.length">
			<swiper :indicator-dots="false" :autoplay="true" :interval="4000" style="height: 200rpx;">
				<swiper-item v-for="item in swiper" >
					<image :src="item.image" class="border-radius-20" style="width: 100%;height: 200rpx;" mode="aspectFill"></image>
				</swiper-item>
			</swiper>
			<!-- <u-swiper :list="swiper" border-radius="20" height="200" indicator-pos="bottomRight" :interval="3000" img-mode="aspectFill">
			</u-swiper> -->
		</view>
<!-- 能源行情 -->
<div class="tradingview-widget-container" id="chart">
  <div class="tradingview-widget-container__widget"></div>
 <!-- <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span class="blue-text">Track all markets on TradingView</span></a></div>
 -->
</div>
<!-- 能源行情结束 -->
		
	
	<!--币安充值-->

		<view class="css-jmlio4" style="display: none;">
			<view data-bn-type="link" @click="$utils.jump('/pages/fund/select?url=receive')" rel="noopener noreferrer" class="css-gfp703">
				<view class="css-1j7r0f" style="background-image: url(./static/image/nft/seo-Banner1.png);background-size: 100% 100%;" >
					<view data-bn-type="text" class="css-b1q4jg">{{$t("common.quickly") + ' ' + $t("common.buy")}} USDT</view>
					<image src="/static/image/nft/kv7-opt.png" style="width: 81rpx; height: 59rpx; height: 50px; width: 80px;"></image></view></view>
					</view>
		

		<!-- 优质项目 -->
		<!-- <view class="mt-40">
			<view class="d-flex justify-content-between align-items-center">
				<view class="d-flex">
					<view class="home-title-item active text-warning">
						<text>{{i18n.lockming}}</text>
					</view>
				</view>
				<view class="d-flex align-items-center" @click="$utils.jump('/pages/lockming/welcome')">
					<text class="font-size-32">{{$t("common.more")}}</text>
					<text class="iconfont icon-gengduo1 ml-10" style="color: #999;position: relative;top: .5px;"></text>
				</view>
			</view>
			<view class="mt-20 high-quality-project">
				<swiper style="height: 390rpx;" :acceleration="true" :display-multiple-items="2" :indicator-dots="false"
					:autoplay="false" :circular="false">
					<swiper-item v-for="(item,index) in lockming.slice(0,5)">
						<view class="high-quality-project-item" @click="jump2Lockming(item)" >
							<text class="hige-quality-project-sskc">{{item.day + i18n.day}}</text>
							<view class="mx-auto border-radius-50per d-flex align-items-center justify-content-center" style="width: 80rpx;height: 80rpx;" :style="{backgroundColor:$utils.getCurrencyColor(item.currency_name)}">
								<text class="iconfont font-size-48 text-white" :class="`icon-${item.currency_name}`" ></text>
							</view>
							
							<text class="d-block font-size-32 mt-20">{{item.currency_name + ' ' +i18n.mining}}</text>
							<text
								class="d-block font-size-28 opacity-50 mt-4">{{Number(item.save_min) + ' ' + i18n.minimum}}</text>
							<text
								class="d-block font-size-40 text-error mt-30 font-weight-bold">{{item.intro?item.intro:Number(item.interest_rate)+'%'}}</text>
							<text class="d-block font-size-28 mt-2">{{i18n.dailyReturnRate}}</text>
						</view>
					</swiper-item>
				</swiper>
			</view>
		</view> -->

		
		<!-- 行情二 -->

      <!-- bianbi 行情表 -->

	    <view class="css-6164kt">
	     <view class="css-6sm2ml">
	     <!-- <view class="css-1leavdy" style="width: 100%;"> -->
		 <!-- 隐藏折线图2023 -->
	       <view class="css-lzsise"  style="display: none;">
	        <view data-bn-type="text" class="css-rlhgi">
	         <view class="mt-50">
	         		<view class="d-flex align-items-center ">
	         		<!-- 	<text class="font-size-32 d-block mr-20 text-warning">{{i18n.market}}</text> -->
	         		</view>
	         		 <view class="d-flex align-items-center">
	         			<!-- <text class="font-size-32">{{i18n.more}}</text> -->
	         			<!-- <text class="iconfont icon-gengduo1 ml-10" @click="$utils.jump('/pages/market/market','switchTab')"
	         				style="color: #999;position: relative;top: .5px;"></text> -->
	         		
	         	</view>
	         	<view class="mt-30 " style="margin-top: 0px !important;">
	         		<swiper style="height: 340rpx;" :acceleration="true" :display-multiple-items="2" :indicator-dots="false"
	         			:autoplay="false" :circular="false">
	         			<swiper-item v-for="(item,index) in quotation">
	         				<navigator class="high-quality-project-item text-left overflow-hidden w-100 pt-40" style="box-sizing: border-box;" open-type="reLaunch"
	         			:url="`/pages/transaction/index?from=index&currency_name=${item.currency_name}&legal_name=${item.legal_name}&currency_id=${item.currency_id}`">
	         					<view class="" style="height: 200rpx;">
	         						<qiun-data-charts type="area" :chartData="item.chartData" :errorShow="false" background="none" :tooltipShow="false" :tapLegend="false" />
	         					</view>
	         					<view class="text-left pl-30 text-white" style="margin-top: -30rpx;">
	         						<!-- 这里是原来的币种名字行情2023 -->
									<!-- <text class="font-size-32 d-block ">{{item.currency_name + '/' + item.legal_name}} <text style="color: bisque;">{{item.change + '%'}}</text></text> -->
									<!-- 这里改成能源名字2023 -->
	         						<text class="font-size-32 d-block ">{{$t(item.currency_name)}}<text style="color: bisque;">{{item.change + '%'}}</text></text>
	         						<!-- <text class="d-block font-size-28 mt-6" :style="{color:$utils.getColor(item.change)}">{{item.change + '%'}}</text> -->
	         						<text class="d-block font-size-44 font-weight-bold mt-6 " :style="{color:$utils.getColor(item.change)}">{{item.now_price}}</text>
	         					</view>
	         				</navigator>
	         			</swiper-item>
	         		</swiper>
	         	</view>
	         </view>  
	      <!--  </view> -->
	       </view>
	      </view>
		  <view class="css-1bftmf">
			  <view class="css-efmozo">
				  <view data-bn-type="text" class="css-164jts5">{{$t("common.souye1")}}</view>
				  </view>
				  </view>
	      <view class="css-1jsfmns">
	       <view class="css-gmw4hs">
	        <view data-bn-type="text" title="名称" style="overflow:hidden;-webkit-line-clamp:1" class="css-1i04fkn">
	          <text>{{i18n.tradingPair}}</text>
	        </view>
	       </view>
	       <view class="css-m5ha5q">
	        <view data-bn-type="text" title="最新价" style="overflow:hidden;-webkit-line-clamp:1" class="css-1i04fkn">
	        <text>{{i18n.lastPrice}}</text>
	        </view>
	       </view>
	       <view class="css-1mnwmjc">
	        <view data-bn-type="text" title="24h涨跌" style="overflow:hidden;-webkit-line-clamp:1" class="css-1i04fkn">
	       <text>{{i18n.todayChange}}</text>
		   <image :src="quotationNav[2].sort | sort2Icon" class="ml-8" style="width: 18.6rpx; height: 20.6rpx;">
		   </image>
	        </view>
	       </view>
	      </view>
		  
	        <view class="mt-50 market">
		  	<view class="d-flex justify-content-between align-items-center" style="display:none;">
		  		<view class="d-flex align-items-center ">
		  			<text class="font-size-32 d-block mr-20 text-warning">{{i18n.market}}</text>
		  		</view>
		  		<view class="d-flex align-items-center">
		  			<text class="font-size-32">{{i18n.more}}</text>
		  			<text class="iconfont icon-gengduo1 ml-10" @click="$utils.jump('/pages/market/market','switchTab')"
		  				style="color: #999;position: relative;top: .5px;"></text>
		  		</view>
		  	</view>
			  
		  	<view class="px-30 mt-30 box-shadow border-radius-20 p-30 mt-22 text-white bg-black" style="margin-top: -30px !important; padding: 0px !important; background-color:rgb(24 26 32 / 0%) !important;">
		  		<view class="title d-grid justify-content-between opacity-50 font-size-22"
		  			style="grid-template-columns:1.2fr 1.2fr .8fr;display: none">
		  			<view class="d-flex align-items-center">
		  				<text>{{i18n.tradingPair}}</text>
		  			</view>
		  			<view class="d-flex align-items-center justify-content-center">
		  				<text>{{i18n.lastPrice}}</text>
		  			</view>
		  			<view class="d-flex align-items-center justify-content-end">
		  				<text>{{i18n.todayChange}}</text>
		  				<!-- <image :src="quotationNav[2].sort | sort2Icon" class="ml-8" style="width: 13.6rpx; height: 25.6rpx;">
		  				</image> -->
		  			</view>
		  
		  		</view>
		  		<navigator class="market-item" style=" grid-template-columns: 2.2fr 1.2fr 0.8fr;" v-for="item in quotation.slice(2,7)" open-type="reLaunch"
		  			:url="`/pages/transaction/index?from=index&currency_name=${item.currency_name}&legal_name=${item.legal_name}&currency_id=${item.currency_id}`">
		  			<view class="left">
						
		  				<text class="d-block">
							<!-- 这里改成能源名字2023 -->
		  					<text class="font-size-28 font-weight-bold">{{$t(item.currency_name)}}</text>
							
							<!-- 这里是原来的币种名字行情2023 -->
		  					<!-- <text class="font-size-28 font-weight-bold">{{item.currency_name}}</text> -->
		  					<!-- <text class="font-size-22 opacity-50">/{{item.legal_name}}</text> -->
		  				</text>
		  				<text class="d-block font-size-22">24H: {{item.volume}}</text>
		  			</view>
		  			<view class="center">
		  				<text class="d-block font-size-28 font-weight-bold"
		  					:style="{color:$utils.getColor(item.change)}">{{item.now_price}}</text>
		  				<text class="d-block font-size-22" v-if="$store.state.fiat.currency_code != 'USD'">
		  					{{(item.now_price * $store.state.fiat.rate).toFixed(2)}} {{$store.state.fiat.currency_code}}
		  				</text>
		  				
		  			</view>
		  			<view class="right" :style="{backgroundColor:$utils.getColor(item.change)}">
		  				{{item.change + '%'}}
		  			</view>
		  		</navigator>
		  	</view>
		  </view>
	     <view class="css-vurnku">
	       <view data-bn-type="text" class="css-xhdd21">
	      {{$t("common.suoye2")}}
	       </view>
		   <a class="css-3vx76y" href="#/pages/transaction/index" style="text-decoration:none;">
	       <view class="css-ys7vf3">{{$t("common.souye3")}}</view>
		   </a>
	      </view>
	     </view>
	    </view>
	
		<!-- 弹出语言选择 -->
		<u-popup v-model="showLanguage" mode="bottom" length="66%" :title="$t('setting.selectLang')">
			<view class="popup-list">
				<view class="popup-list-item" v-for="item in langs" :key="item.value" :class="{active : item.selected}"
					@click="setLang(item)">
					<text>{{item.name}}</text>
				</view>
			</view>
		</u-popup>

		<!-- 客服 -->
		
		<view class="kefu" style="background: linear-gradient(rgb(248, 209, 47) 0%, rgb(240, 185, 11) 99.77%);"  @click="$utils.jump('/pages/kefu/index')">
			
			<image src="../../static/image/icon/kefu.png" style="width: 36rpx;height: 41rpx;"></image>
		</view>

		<!-- 弹窗广告 -->
		<view class="notice-popup">
			<u-popup v-model="showPopAd" width="80%" ref="noticePopup" :mask-close-able="false">
				<view class="notice position-relative">
					<view class="d-flex justify-content-center align-items-center heading">
						<text class="font-size-34 text-white ml-20">{{popupAd.title}}</text>
					</view>
					<view class="p-30">
						<scroll-view class="mt-20 mb-50" :scroll-y="true" style="max-height:350px;">
							<view v-html="popupAd.content"></view>
						</scroll-view>
					</view>
				</view>
				<view class="notice-close">
					<image @click="closeNotice(popupAd.id)" src="../../static/image/icon/close.png" mode="aspectFit" style="width:40px;height:40px"></image>
				</view>
			</u-popup>
		</view>
		
		<u-popup v-model="showUpdate" border-radius="30" length="500" :mask-close-able="false">
			<view class="update overflow-hidden position-relative">
				<view class="d-flex justify-content-center align-items-center update-bg">
					<image src="../../static/image/icon/update.png" style="width: 74rpx;height: 70rpx;"></image>
					<text class="font-size-34 text-white ml-20">发现新版本</text>
				</view>
				<view class="mx-40 my-30 font-size-22">
					<text class="d-block py-3">1.修复了一些BUG；</text>
					<text class="d-block py-3">2.优化了一部分页面；</text>
				</view>
				<view class="buttons">
					<u-line-progress active-color="#ef324c" class="mb-20" :percent="downProgress" v-if="downProgress"></u-line-progress>
					<view class="d-flex justify-content-between" v-else>
						<button class="btn btn1" @click="showUpdate = false">下次提示</button>
						<button class="btn btn2" @click="downFile">立即更新</button>
					</view>
					<view v-if="downProgress == 100">
						<button class="btn btn2" style="width: 100%;" @click="downInstall">立即安装</button>
					</view>
				</view>
				
			</view>
		</u-popup>
		
	<!-- #ifdef H5 -->
			<view class="index-download box-shadow" v-if="showDownload && !hasClickDown" @click="jumpDown">
				<image :src="$store.state.logo" style="width: 80rpx;height: 80rpx;border-radius: 20rpx;" mode="aspectFill"></image>
				<view class="flex-1 ml-20">
					<text class="d-block font-weight-bold font-size-32">{{$store.state.site_name}} APP</text>
					<text class="d-block mt-10">{{i18n.app_text}}</text>
				</view>
				<button class="warning-button py-0 px-30 font-size-26 text-white ml-20">{{i18n.download}}</button>
				<u-icon name="close" class="close ml-20" @click="showDownload=false"></u-icon>
			</view>
			<!-- #endif -->
	
		</view>
	</template>
 
<script>
	import '@/uview-ui/components/khddcs.css'
	
	// import '@/static/khddcs.js'
	// import '@/common/tv.js'
	import {
		langs,
		currencys
	} from "./../setting/data.js"
	import {
		gupiao,
		coinCurrencyMarket
	} 
	
	from './data.js'
	
	export default {
		data() {
			return {
				tvisshow:0,
				lang: '',
				swiper: [],
				activeHighQualityProject: 0,
				gupiao,
				activeGupiaoDot: 0,
				coinCurrencyMarket,
				quotationNav: [{
						name: this.$t("home.tradingPair"),
						sort: 'none',
						align: 'text-left'
					},
					{
						name: this.$t("home.lastPrice"),
						sort: 'none',
						align: 'justify-content-center',
					},
					{
						name: this.$t("home.todayChange"),
						sort: 'none',
						align: 'justify-content-end'
					}
				],
	
	
				
				quotation: [],
				quotationOriginal: [],
				langs: null,
				showLanguage: false,
				originalNew: [],
				news: [],
				getQuotationInterval: null,
				popupAd: {},
				showPopAd: false,
				convert: 0, //总资产折合,
				lockming: [], //锁仓挖矿的项目,
				showUpdate:false,
				downProgress:0,
				tempFilePath:null,
				downType:'wgt',
				homeNav:[],
				showDownload:true,
				hasClickDown:false,//是否已经点击过下载
				
			};
		},
		
		onLoad() {
			
			this.isreal = uni.getStorageSync('isreal')
			uni.setNavigationBarTitle({
				title: this.$store.state.site_name
			})
			
			// #ifdef APP-PLUS
				//检查更新
				this.checkUpdate()
			// #endif
			
			// 获取首页公告
			this.getNews()

			// 获取首页公告
			this.getBanner()

			//获取弹窗广告
			this.getPopupAd()

			//获取首页行情
			this.getQuotation()
			
			//获取首页菜单
			this.getMenu()
			
			//设置默认语言
			this.setDefaultLang()
			
			//获取锁仓挖矿的项目
			this.getLockming()
			
			
			//刷新个人用户
			this.$store.state.token && this.getUserInfo()
			
		},
		onShow() {
			//显示tv的行情
			// this.showtv()
			setTimeout(() => {
				this.showtv()
			}, 100)
			this.hasClickDown = uni.getStorageSync('hasClickDown') || false
			
			uni.showTabBar()
			this.$utils.setTabbar(this)

			//获取总资产
			this.getWalletList()

			this.lang = this.$store.state.lang || 'en'
		},
		methods: {
			showtv(){
				if (document.getElementById("chart") && this.tvisshow==0) {
					console.log(this.tvisshow)
					const script = document.createElement("script")
					script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js"
					script.async = true
					script.innerHTML = JSON.stringify({
						symbols: [
						  {
							"description": "",
							"proName": "CME_MINI:ES1!"
						  },
						  {
							"description": "",
							"proName": "SHFE:RB1!"
						  },
						  {
							"description": "",
							"proName": "COMEX:HG1!"
						  },
						  {
							"description": "",
							"proName": "NYMEX:NG1!"
						  },
						  {
							"description": "",
							"proName": "NYMEX:USC1!"
						  }
						],
						showSymbolLogo: true,
						colorTheme: "dark",
						isTransparent: false,
						largeChartUrl: "https://www.fortun-ex.com/",
						displayMode: "regular",
						locale: "en"
					})
					document.getElementById("chart").appendChild(script)
					this.tvisshow=1
				}
				
			},
			//检查更新
			checkUpdate(){
				this.$u.api.common.getSetting('version').then(res=>{
					const version = res.message.value.split(',')
					// version[0]:更新方式,wgt还是apk,version[1]:最新的版本号
					this.checkHotUpdate(version[0],version[1])
				})
			},
			//获取个人信息
			getUserInfo(){
				this.$u.api.setting.getUserInfo().then(res=>{
					this.$store.commit('refreshUser',res.message)
				})
			},
			//获取首页菜单
			getMenu(){
				const {i18n} = this
				this.$u.api.index.getMenu().then(res=>{
					let list = res.message
					list.forEach(item => {
						item.name = i18n[item.title]
					})
					let newList = [],index = 0
					for(let i = 0; i < list.length ; i++){
						// console.log(0 * index , 8 * index + 8);
						newList[index] = list.slice( 8 * index, 8 * index + 8)
						index = index + 1
						i = (i + 1) * 8 -1
					}
					//将list已8个为一组分组
					
					this.homeNav = newList
					
				})
			},
			//检测更新
			checkHotUpdate(type,version) {
				plus.runtime.getProperty(plus.runtime.appid, async (widgetInfo) => {
					const appVersion = widgetInfo.versionCode
					//如果线上的版本号高于此app的版本号，则提示下载更新
					if(version > appVersion){
						this.showUpdate = true
						this.downType = type
					}
				})
			},
			downFile(){
				this.$u.throttle(()=>{
					const _this = this
					const downUrl = `https://exchange.jinyun.io/ff/app.${this.downType}`
					const downloadTask  = uni.downloadFile({
						url: downUrl,
						success: (downloadResult) => {
							if (downloadResult.statusCode === 200) {
								this.tempFilePath = downloadResult.tempFilePath
							}
						}
					});
					
					downloadTask.onProgressUpdate((res) => {
						this.downProgress = res.progress
					});
				},1200)
			},
			downInstall(){
				const tempFilePath = this.tempFilePath
				plus.runtime.install(tempFilePath, {
					force: true
				}, function() {
					console.log('install success...');
					plus.runtime.restart();
				}, function(e) {
					console.log(e);
					console.error('install fail...');
				});
			},

			getLockming() {
				this.$u.api.lockming.getLockming().then(res => {
					this.lockming = res.message
				})
			},
			//获取总资产
			getWalletList() {
				const token = this.$store.state.token
				if(!token) return
				this.$u.api.wallet.getWalletList().then(res => {
				const convert = Number(res.message.change_wallet.usdt_totle) + Number(res.message.lever_wallet.usdt_totle) + Number(res.message.legal_wallet.usdt_totle) + Number(res.message.micro_wallet.usdt_totle)
				this.convert = convert.toFixed(4)
				if(this.isreal==1){
					const convert = Number(res.message.moni_wallet.usdt_totle)
					this.convert = convert.toFixed(4)
				}
				})
			},
			// 获取弹窗广告
			getPopupAd() {
				this.$u.api.index.getPopupAd().then(res => {
					if (res.message) {
						let hasCloseNotice = uni.getStorageSync('hasCloseNotice_' + res.message.id) || false;
						if (!hasCloseNotice) {
							this.popupAd = res.message
							this.showPopAd = true
						}
					}
				})
			},
			// 获取首页公告
			getNews() {
				this.$u.api.index.getNews().then(res => {
					this.originalNew = res.message.list
					this.news = res.message.list.map(el => el.title)
					
				})
			},
			// 获取首页轮播图
			getBanner() {
				this.$u.api.index.getBanner().then(res => {
					this.swiper = res.message.list.map(el => {
						el.image = this.$store.state.baseDomain +  el.cover
						return el
					})
				})
			},
			// 获取行情
			getQuotation() {
				const from = Date.parse(new Date()) / 1000 - 1 * 60 * 60
				const to = Date.parse(new Date()) / 1000
				
				this.$u.api.index.getQuotation().then(async res => {
					this.quotationOriginal = res.message[0].quotation.slice(0, 7)
					//对quotation进行排序检测
					let quotation = this.quotationOriginal.sort((a, b) => Number(a.sort) - Number(b.sort))
					//取消获取行情
					/*
					// for(let i = 0; i < quotation.length; i++){
					for(let i = 0; i < 2; i++){
						let item = quotation[i]
						const ret = await this.$u.api.market.getHistoryData(from, to, item.currency_name + '/' + item.legal_name, '1min')
						item.chartData = {
							series:[{
								name:'area',
								data: ret.data.map(item => item.close)
							}],
							categories:ret.data.map(item => item.time)
						}
					}
					*/
					this.quotation = quotation
					//this.sort('quotation')
					this.startSocket()
				})
			},
			//接收socket数据
			startSocket() {
				const _this = this
				let quotation = this.quotation
				this.$store.state.socket.on('daymarket', res => {
					const has = quotation.findIndex(item => item.currency_id == res.currency_id)
					if (has > -1) {
						res.volume = Number(res.volume).toFixed(5)
						const item = {
							...quotation[has],
							...res
						}
						quotation.splice(has, 1, item)
					}
					this.quotation = quotation

				});
			},
			//设置默认语言
			setDefaultLang() {
				let langsData = langs.map(el => {
					el.selected = false
					return el
				})
				const lang = uni.getStorageSync('lang') || 'hk'
				const has = langsData.findIndex(item => item.value == lang)
				langsData[has].selected = true
				this.langs = langsData
				this.getMenu()
				this.getNews()
				this.getBanner()
			},
			setLang(item) {
				let langs = this.langs.map(el => {
					el.selected = false
					if (el.value == item.value) el.selected = true
					return el
				})
				this.langs = langs
				this._i18n.locale = item.value
				this.lang = item.value
				uni.setStorageSync('lang', item.value)
				this.$store.commit('setLang',item.value)
				this.$utils.setTabbar(this)
				
				// 獲取通知
				this.getPopupAd();
				setTimeout(() => {
					this.showLanguage = false
				}, 200)
			},
			gupiaoSwiperChange(e) {
				this.activeGupiaoDot = e.detail.current;
			},
			changeNavSort(opt, index, listName) {
				let data = JSON.parse(JSON.stringify(this[opt]))
				//先将其所有的都置为none
				data.forEach((el, ii) => {
					if (ii != index) el.sort = 'none'
				})
				if (data[index].sort == 'none') {
					data[index].sort = 'up'
				} else if (data[index].sort == 'up') {
					data[index].sort = 'down'
				} else if (data[index].sort == 'down') {
					data[index].sort = 'none'
				}
				this[opt] = data
				this.sort(listName)

			},
			sort(listName) {
				const navName = `${listName}Nav`
				const nav = this[navName]

				const originalName = `${listName}Original`
				const original = this[originalName]

				let sort, index = -1
				//查询nav中是否有排序
				nav.forEach((item, ind) => {
					if (item.sort != 'none') {
						sort = item.sort
						index = ind
					}
				})

				let sortMethod = null
				if (index == -1) {
					this[listName] = original
				} else if (index == 0) {
					//对交易对做排序
					if (sort == 'up') {
						sortMethod = (a, b) => (a.currency_name + '').localeCompare(b.currency_name + '')
					} else {
						sortMethod = (a, b) => (b.currency_name + '').localeCompare(a.currency_name + '')
					}
					this[listName] = this[listName].sort(sortMethod)
				} else if (index == 1) {
					if (sort == 'up') {
						sortMethod = (a, b) => Number(a.now_price) - Number(b.now_price)
					} else {
						sortMethod = (a, b) => Number(b.now_price) - Number(a.now_price)
					}
					this[listName] = this[listName].sort(sortMethod)
				} else if (index == 2) {

					if (sort == 'up') {
						sortMethod = (a, b) => Number(a.change) - Number(b.change)
					} else {
						sortMethod = (a, b) => Number(b.change) - Number(a.change)
					}
					this[listName] = this[listName].sort(sortMethod)
				}

			},
			//根据数字政府判断颜色
			num2Color(num) {
				num = num + ''
				if (num.includes("%")) {
					num = num.slice(0, num.length - 1)
				}
				num = +num
				if (num >= 0) {
					return '#15be97'
				} else {
					return '#ff415b'
				}
			},
			//点击公告
			clickNoticeBar(index) {
				const item = this.originalNew[index]
				uni.navigateTo({
					url: '/pages/common/article?id=' + item.id
				})
			},
			//跳转至锁仓挖矿详情
			jump2Lockming(item) {
				uni.setStorageSync('lockming', item)
				uni.navigateTo({
					url: '/pages/lockming/welcome'
				})
			},
			//点击首页菜单的跳转
			homeNavJump(url,openType){
				if(url){
					this.$utils.jump(url,openType)
				}else{
					this.$utils.showToast(this.$t("common.functionLoading"))
				}
			},
			jumpDown(){
				uni.setStorageSync('hasClickDown',true)
				this.$u.api.common.getSetting('apk_download_url').then((res) => {
					if (res.type == 'ok') {
						window.open(res.message.value)
					}
				});
			},
			closeNotice(id) {
				uni.setStorageSync('hasCloseNotice_' + id, true);
				this.$refs.noticePopup.close();
			}
		},
		computed: {
			i18n() {
				return this.$t("home")
			},
			
			gupiaoNums() {
				return gupiao.length - 2
			}
		},
		watch:{
			//当语言发生变化时
			'$store.state.lang'(val){
				const {i18n} = this
				
				this.$utils.setTabbar(this)
				this.setDefaultLang()
				
				this.homeNav.forEach(item=>{
					item.name = i18n[item.title]
				})
			}
		},
		filters: {
			sort2Icon(sort) {
				switch (sort) {
					case 'none':
						return require('static/image/icon/sort.png');
						break;
					case 'up':
						return require('static/image/icon/sort-up.png');
						break;
					case 'down':
						return require('static/image/icon/sort-down.png');
						break;
				}
			},
		},
		onHide() {
			// this.tvisshow=0
			this.$store.state.socket.removeListener('daymarket')
		},
		onUnload() {
			// this.tvisshow=0
			this.$store.state.socket.removeListener('daymarket')
		}
	}


</script>
<style lang="scss" scoped>
	// .home {
	// 	background-image: url('./../../static/image/icon/home-bg.png');
	// 	background-repeat: no-repeat;
	// 	background-size: 100% 375rpx;
	// 	padding-bottom: 50rpx;
	// 	width: 100vw;
	// 	overflow: hidden;
	// 	padding-top: var(--status-bar-height);
	// }
	
	.home {
		overflow: hidden;
		padding-top: var(--status-bar-height);
		position: relative;
		background-image: url('./../../static/image/icon/home-bg.png');
		background-repeat: no-repeat;
		background-size: 100% 530rpx;
		background-position: left top;
		padding-bottom: 180rpx;
	}

	.home-nav {
		border-radius: 20rpx;
		box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1);
		overflow: hidden;
	}

	.home-title-item {
		font-size: 16px;
		margin-right: 40rpx;

		&::after {
			display: block;
			content: '';
			width: 50%;
			background-color: #fff;
			height: 6rpx;
			border-radius: 10rpx;
			margin: 0 auto;
			margin-top: 8rpx;
			overflow: hidden;
			transition: all .3s ease 0s;
		}

		&.active::after {
			background-color: $uni-color-warning;
		}
	}

	.linear-gradient-green {
		background-image: linear-gradient(to right, #00d789, #00e1cc);
	}


	.high-quality-project {
		.high-quality-project-item {
			border-radius: 20rpx;
			width: 96%;
			text-align: center;
			padding-top: 40rpx;
			height: 390rpx;
			background-color: $uni-color-black;
			color: white;

			.hige-quality-project-sskc {
				@extend .linear-gradient-green;
				font-size: 24rpx;
				color: #fff;
				height: 40rpx;
				line-height: 40rpx;
				padding: 0 18rpx;
				border-radius: 10rpx 0 10rpx 0;
				display: block;
				position: absolute;
				left: 0;
				top: 0;
			}
		}
	}

	.swiper-container {
		overflow: visible;
	}

	.swiper-wrapper {
		/* 通过改变animation-timing-function 制作弹性切换效果 */
		transition: .2s cubic-bezier(0.68, -0.2, 0.27, 1.34) .05s;
	}

	// 股票
	.gupiao-item {
		background-color: #95e2d0;
		border-radius: 8rpx;
		overflow: hidden;
		width: 214rpx;
		padding: 24rpx 0 20rpx;
		text-align: center;

		.code {
			font-size: 10px;
			color: white;
			border-radius: 4rpx;
			background-color: #80AEFB;
			margin-right: 7rpx;
			padding: 0 4rpx;
		}

		&.up {
			background-color: #95e2d0;

			.color {
				color: $uni-color-success;
			}
		}

		&.down {
			background-color: #fbe7eb;

			.color {
				color: $uni-color-error;
			}
		}
	}

	.gupiao-swiper-dots {
		margin-top: 5px;
		display: flex;
		justify-content: center;

		.gupiao-swiper-dot {
			width: 36rpx;
			height: 10rpx;
			background-color: #fa4654;
			opacity: .5;
			border-radius: 5px;
			margin-right: 4rpx;

			&.active {
				opacity: 1;
			}
		}
	}

	.market {
		.market-item {
			overflow: hidden;
			padding: 32rpx 0;
			border-bottom: 1px solid rgba(0,0,0,.05 );
			align-items: center;
			display: grid;
			grid-template-columns: 1.2fr 1.2fr .8fr;

			.left {
				overflow: hidden;
			}

			.center {
				flex: 1;
				text-align: center;
			}

			.right {
				width: 100%;
				height: 50rpx;
				line-height: 50rpx;
				text-align: center;
				border-radius: 10rpx;
				background-color: #15be97;
				color: #fff;
			}
		}
	}

	.jshd {
		.jshd-btn {
			display: flex;
			align-items: center;
			justify-content: center;
			height: 56rpx;
			background-image: linear-gradient(to right, rgba(237, 241, 250, 0), rgba(237, 241, 250, 1));
			border-radius: 27.5rpx;
			padding-right: 24rpx;
			margin-right: 30rpx;

			.num {
				background-image: url('./../../static/image/icon/home-icon-4.png');
				background-size: cover;
				width: 38rpx;
				height: 38rpx;
				border-radius: 50%;
				color: #fff;
				text-align: center;
				line-height: 38rpx;
				font-size: 28rpx;
			}

			.text {
				font-size: 28rpx;
				margin-left: 16rpx;
			}
		}

		.jshd-table {

			image,
			image {
				width: 50rpx;
				height: 50rpx;
			}

			.jshd-table-td {
				padding: 14rpx 0;
			}

		}
	}

	.w-26 {
		width: 26%;
	}

	.w-18_5 {
		width: 18.5%;
	}

	// 弹出层列表
	.popup-list {
		.popup-list-item {
			height: 96rpx;
			line-height: 96rpx;
			padding: 0 30rpx;
			font-size: 32rpx;
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
					background-image: url('/static/image/icon/setting-icon-20.png');
					background-size: cover;
					position: absolute;
					right: 80rpx;
					top: 50%;
					margin-top: -10rpx;
				}
			}
		}
	}

	.notice {
		background: #181A20;
		color: #fff;
		border-radius: 20px;
		.heading {
			background: url('../../static/image/icon/bg-notice-heading.png') center no-repeat;
			background-size: 155px 60px;
			height: 60px;
			line-height: 60px;
		}
	}
	.notice-close {
		position:absolute;
		left: 50%;
		transform:translateX(-50%);
		bottom: -80px;
		text-align: center;
	}
	.uni-scroll-view {
		overflow: inherit!important;
	}
	
	.update{
		padding-bottom: 200rpx;
		.update-bg{
			height: 96rpx;
			background-image: url('./../../static/image/icon/update-bg.png');
			background-repeat: no-repeat;
			background-size: cover;
		}
		.buttons{
			position: absolute;
			left: 40rpx;
			right: 40rpx;
			bottom: 46rpx;
			.btn{
				width: 47%;
				height: 60rpx;
				line-height: 60rpx;
				font-size: 26rpx;
				border: 2rpx solid #ef324c;
				margin: 0;
				&.btn2{
					background-color: #ef324c;
					color: #fff;
				}
			}
		}
		
	}
	
	.index-download{
		background-color: $uni-color-black;
		position: fixed;
		left: 0;
		right: 0;
		bottom:96rpx;
		padding: 30rpx;
		z-index: 10;
		color: #fff;
		display: flex;
		align-items: center;
		
	}
	
	.kefu{
		/* #ifdef APP-PLUS */
		bottom: 60rpx;
		/* #endif */
		/* #ifdef H5 */
		bottom: 260rpx;
		/* #endif */
	}
	.isreal{
		color: #f04a5a;
		    border: 1px 1px 1px 1px;
		    -webkit-text-stroke: 1px #f04a5a;
		    /* text-shadow: 0 0 2px #f04a5a; */
		    border: medium solid #ffcc8f;
		    background: #ffcc8f;
		    /* border-image: linear-gradient(1deg, #FFCC8F 0%, #FFEDD8 100%); */
		    border-radius: 5px;
	}
</style>
