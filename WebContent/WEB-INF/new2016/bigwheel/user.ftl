<html>
<head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
<meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, width=device-width">
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta names="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    <title>${titel}</title>
    <link rel="stylesheet" href="../css/normalize.css"/>
    <link rel="stylesheet" href="../css/main.css"/>
</head>
<body class="mb-body index-body">
    <div class="page-main" id="page-main">
        <div class="phone-number" id="phoneTXT" ></div> <input type="hidden" id="phoneVAL" value=""/>
        <div class="header-btn-wrap">
            <a href="javascript:" id="myProduct" class="mine-prize-btn"><!--我的奖品-->
                <img src="../images/btn-mine-prize.png" alt="" />
            </a>
            <a href="javascript:" class="flow-coin-btn" id="myCoin"><!--流量币-->
                <img src="../images/btn-flow-coin.png" alt=""/>
            </a>
        </div>
        <!-- 大转盘 开始-->
        <div class="dial-wrap">
            <div class="dial-main" id="dial-main">
                <img class="dial-main-img" src="../images/dial-bg.png" alt=""/>
                <div class="dial-inner" id="dial-inner">
                    <!--分享增加机会 开始-->
                    <div class="share-qrcode">
                        <div class="plus-times">
                        	<img src="../images/qrcode-tip-top.gif" alt=""/>
						</div>
                        <div class="qrcode-wrap" id="qrcode-wrap">
                            <img src="../images/tmp-qrcode.jpg" alt="" style="opacity:0"/>
                        </div>
                        <div class="share-tips">
                            <img src="../images/qrcode-tip-bottom.gif" alt=""/>
                        </div>
                    </div>
                    <!--分享增加机会 结束-->
                    <div class="dial-table">
                        <table cellpadding="0" cellspacing="0">
                            <tr>
                                ${productMap0}
                                ${productMap1}
                                ${productMap2}
                                ${productMap3}
                            </tr>
                            <tr>
                               ${productMap4}
                                <td rowspan="2" colspan="2" style="vertical-align: bottom">
                                    <!--Go 开始-->
                                    <div class="has-draw-chance" id="has-draw-chance">
                                        <div class="go-tips">天天大转盘</div>
                                        <div class="img-wrap" id="btn-go">
                                            <img src="../images/btn-go.png" alt=""/>
                                            <p id="chanceTxt" style="display:none">今天还有<i id="chance-num">0</i>次机会</p>
                                        </div>
                                    </div>
                                    <!--Go 结束-->
                                </td>
                                ${productMap5}
                            </tr>
                            <tr>
                               ${productMap6}
                               ${productMap7}
                            </tr>
                            <tr>
                                ${productMap8}
                                ${productMap9}
                                ${productMap10}
                                ${productMap11}
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <!-- 大转盘 结束-->

        <!--公告栏 开始-->
        <div class="notify-wrap">
            <div class="role-tb">
                <div class="notify-title role-td width-fixed"></div>
                <div class="notify-desc role-td width-auto">
                    <ul id="notify-ul">
                        <li>139xxxxxxxx获得100M 1小时有效</li>
                    </ul>
                </div>
            </div>
        </div>
        <!--公告栏 结束-->

        <!--广告栏 开始-->
        <div class="ad-3-col">
            <div class="img-wrap">
                <a href="#" onclick="adv_btn3()">
                    <img src="../images/index-ad1.png" alt=""/>
                </a>
            </div>
            <div class="img-wrap">
                <a href="javascript:;" onclick="adv_btn3()">
                    <img src="../images/index-ad2.png" alt=""/>
                </a>
            </div>
            <div class="img-wrap">
                <a href="javascript:;" onclick="adv_btn3()">
                    <img src="../images/index-ad3.png" alt=""/>
                </a>
            </div>
        </div>
        <!--广告栏 结束-->

        <!--底部按钮 开始-->
        <div class="bottom-link">
            <div class="link-left" onclick="showDesc(this,'#desc-content')">活动规则</div>
            <div class="link-right">
            	<a href="javascript:" onclick="faq()" class="mine-prize-btn">常见问题指引</a>
            </div>
        </div>
        
        <!--底部按钮 结束-->
    </div>
    <!--活动规则 开始-->
    <div class="rule-desc" id="desc-content" style="display: none">
    	1、抽奖机会：每人每天至少有1次抽奖机会，每天抽奖时间为：10:00-22:00；每日抽奖机会不结转至次日，22:00后当日剩余的抽奖机会自动清零；
		<br>2、奖品查看及使用：点击主页面“我的奖品”及“流量币”查看并使用奖品，或关注“珠海移动”微信，发送微信指令“大转盘”查看并使用奖品；中奖用户须关注“珠海移动”官方微信才可使用或领取奖品。
		<br>（1）流量奖品：通过优惠券形式发放，中奖后72小时内到账；
		<br>（2）流量币：流量币目前可兑换流量包，点击大转盘主页“流量币”或“珠海移动”官方微信发送“大转盘”获取兑换页面；
		<br>（3）其他奖品：请留意中奖后的提示窗口或页面；
		<br>3、奖品有效期：流量币有效期至2016年11月30日，其余奖品兑换有效期请在“我的奖品”中有显示标注，逾期失效；
		<br>4、流量有效期：流量有效期≠奖品有效期。流量有效期从用户成功兑换流量优惠券后开始计算，不同奖品有效期从1小时到30天不等，使用前请见页面说明；
		<br>5、流量奖品的优惠券采用先扣流量包话费，再立即返还等额话费的方式实现，请兑换流量类奖品时确保可用话费余额大于流量包费用；
		<br>6、本活动仅限珠海移动正常使用号码参与，非正常状态号码参加活动所获奖励无效；
		<br>7、我司可根据本活动的实际举办情况对活动规则进行变动或调整，相关变动或调整将公布在活动页面上，并于公布时即时生效；
		<br>8、如出现不可抗力或情势变更的情况(包括但不限于重大灾害事件、活动受政府机关指令需要停止举办或调整的、活动遭受严重网络攻击或因系统故障需要暂停举办的)，本活动平台可依相关法律法规的规定主张免责。
    </div>
    <!--活动规则 结束-->
    <script src="../js/src/common/common.js"></script>
    <script src="../js/lib/jquery/jquery.js"></script>
    <script src="../js/src/common/jquery.qrcode.min.js"></script>
	<script src="../js/lib/seajs/seajs.js"></script>
   	<script type="text/javascript">
		seajs.use(['tfAlert'], function(require) {
		    seajs.use("../js/"+SCRIPT_PATH+"/model/bigwheel/newmain.js?1.0");
		    seajs.use("../js/"+SCRIPT_PATH+"/model/weChat/merchandiseShare");
		    seajs.use("../js/"+SCRIPT_PATH+"/model/weChat/wechatEvent");
		});
	</script>
</body>
</html>