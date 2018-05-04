const intro = {
  title: '前言',
  para1:
    'Graphene，石墨烯，是EOS创始人Daniel Larimer 带领开发团队共同创建的 一个区块链底层技术架构，Daniel基于此架构开发了Bitshares, Steem, EOS等具有深远影响的项目，基于此架构开发的著名区块链项目还有欧链, Crypviser, DasCoin, DEEX, 公信宝, YOYOW, Peerplays, Cybex, Decent, MUSE, Ark, Scorum, Karma, Payger, ECHO, SEER等。',
  para2:
    '石墨烯技术的高性能和可扩展性让区块链技术转向商业应用成为可能，但相关技术人才紧缺成为制约行业发展的重要因素，本次会议旨在加强石墨烯社区的交流合作，建立石墨烯开发者社区，为石墨烯生态注入更强的力量。',
}

const lookback = {
  title: '2018中国石墨烯开发者大会回顾',
  para:
   'Bitshares、公信宝、Cybex、DECENT等12个优质区块链项目共聚上海，400+观众现场互动，探讨石墨烯技术的未来。',
}

const overview = {
  title: '全球大会概况',
  head1: '会议规模:',
  head2: '会议时间:',
  head3: '会议地点:',
  head4: '目标群体:',
  head5: '会议形式:',
  head6: '主办方:',
  head7: '协办方:',
  p1: '1000+ 参会者',
  p2: '2018年5月5日-5月6日',
  p3: '上海喜马拉雅酒店',
  p4:
    '石墨烯技术开发者、区块链开发者、区块链相关从业者、区块链技术爱好者、区块链相关投资人',
  p5: '主题演讲+圆桌论坛',
  p6: 'BlockGeek、GDEX',
  p7: 'Blockchain Centre China、Blockshine、币问、币乎、共享财经',
}

const star = {
  title: '大会亮点',
  head1: '闭门会议',
  head2: '特色圆桌',
  head3: 'EOS专场',
  p1: '与全球顶尖石墨烯技术开发者面对面交流',
  p2: '比特股未来走势大论战',
  p3: '全方位了解中国EOS社区生态',
}
const pannel = {
  title: '特色圆桌'
}

const session = {
  title: 'EOS专场'
}

const vip = {
  title: '特邀嘉宾',
}
const sponsor = {
  title: '赞助商',
	agent: '独家战略合作伙伴',
	gold: '金牌赞助',
	ag: '银牌赞助'	
}
const host = {
  title: '主办方',
  blockGeek: `BlockGeek (苏州块聚客信息科技有限公司) 是世界领先区块链跨国企业Blockchain Global 旗下区块链教育航母品牌，通过为开发者、创业者、企业家、高校师生等提供丰富的线上线下区块链课程，构建以教育为核心的区块链人才生态，助推全球社会变革。`,
  gdex: `GDEX是比特股理事巨蟹先生成立的上海威切信息科技有限公司做的一款基于Bitshares、去中心化的数字资产交易所。在这里，用户不仅可以交易自己的数字资产，还可以使用Bitshares内盘的功能，如资产发行、抵押、投票等。`,
}

var schedule = {
  title: "大会日程",
  columns: ["时间", "主题", "演讲嘉宾"],
  times: [
    "09:00 - 09:30", "09:30 - 09:35", "09:35 - 10:00", "10:00 - 10:20",
    "10:20 - 10:40", "10:40 - 11:00", "11:00 - 11:20", "11:20 - 11:40",
    "11:40 - 12:00", "12:00 - 13:40", "13:40 - 14:00", "14:00 - 14:20", "14:20 - 15:20",
    "15:20 - 16:20", "16:20 - 16:50", "16:50 - 18:00", "18:30 - 21:30"
  ],
  topics: [
    "签到",
    "主持人开场+主办方致辞",
    "BitShares 的未来之路",
    "Bitshares Blockchain in todays world",
    "The Future of Cybersecurity and Trading",
    "硬件钱包keybox技术架构",
    "公信宝到底对Graphene做了什么？",    
    "Consensus and emission algorithm for a graphene-based protocol",
    "What does the future hold for Bitshares? OpenLedger gives their vision",
    "午餐",
    "Semi-decentralized ecosystem using Bitshares Blockchain is the reality of decentralization",
    "Low Latency Distributed Exchange",
    "石墨烯技术圆桌",
    "特色圆桌：BTS未来发展走向论战",
    "休息",
    "YOYOW专场",
    "晚宴"
  ],
  speakers: [
    "", "",
    "巨蟹, GDEX创始人，比特股理事",
    "Annemieke Dirkes, 比特股区块链全球发言人",
    "Mark Babbitt,  Crypviser GmbH 公司 CCO",
    "张增波, 鼓鼓钱包CTO",
    "黄敏强, 公信宝创始人兼CEO",
    "Yury Parsamov，Gravity Protocol 公司 CEO  Peter Asalkhanov，Gravity Protocol 技术主管",
    "Ronny Boesing，OpenLedger ApS创始人兼CEO 比特股理事\n Ivan Bandaryk，OpenLedger CTO， 比特股见证人OpenLedger-dc",
    "",
    "Vlad Sapozhnikov, DEEX 交易所联合创始人兼 CEO",
    "叶芷，CYBEX CTO",
    "Ryan R. Fox（主持人），Fabian Schuh (Xeroc)，Sigve Kvalsvik，Alfredo Garcia，Peter Asalkhanov，Mark Babbitt，马宝春，叶芷，罗谊，张增波",
    "郑玉山（主持人），Ronny Boesing， Christoph Hering， Annemieke Dirkes，Fabian Schuh (Xeroc)，巨蟹，白菜，梓岑，姚宗秋， 胡华波，吴序强",
    "","",""
  ],
}

var schedule2 = {
  title: "大会日程",
  columns: ["时间", "主题", "演讲嘉宾"],
  times: [
    "09:20 - 09:40", "09:40 - 10:00", "10:00 - 10:20", "10:20 - 10:40",
    "10:40 - 11:00", "11:00 - 11:20", "11:20 - 11:40", "11:40 - 12:00",
    "12:00 - 13:40", "13:40 - 14:00", "14:00 - 14:20", "14:20 - 14:40", "14:40 - 15:00",
    "15:00 - 15:20", "15:20 - 15:35", "15:35 - 15:50", "15:50 - 16:05",
    "16:05 - 16:20", "16:20 - 16:35", "16:35 - 16:50", "16:50 - 17:05", "17:05 - 18:00"
  ],
  topics: [
    "The future of Digital Assets Distribution Demonstrated on Real World Use Cases",
    "Graphene based currency of trust",
    "分层多空间信息耦合平台",
    "Same DPoS, different IoTchain",
    "休息",
    "Payger - How we make money social",
    "Creating new smart contracts in graphene blockchains",
    "Peerplays provable fairness through SWEEPs",
    "午餐",
    "The BitShares Python Library",
    "Sustainable Development: Worker Proposals Funded by the Reserve Pool",
    "Enhancing Graphene infrastructure",
    "区块链技术发展与应用挑战",
    "OracleChain 的EOS节点竞选之路",
    "火币矿池助力EOS生态",
    "对EOS性能的理解和分享",
    "通往未来版权之路—打造基于EOS的文娱生态圈",
    "Why EOS，Why us",
    "MEET.ONE对EOS生态的思考与实践",
    "EOS超级社群节点之路",
    "区块链3.0时代的交易平台定位",
    "EOS圆桌辩论",
  ],
  speakers: [
    "Matej Michalko，DECENT创始人兼CEO，ALAX联合创始人",
    "Branislav Zelenak，DasCoin 区块链团队leader Damir Nedžibović，DasCoin 资深区块链开发者",
    "罗谊，区块链技术研究者",
    "马宝春，技术极客",
    "",
    "Christoph Hering, Payger创始人兼CEO",
    "Alfredo Garcia，比特股核心开发者",
    "Jonathan Bahai，Peerplays 创始人 eXeBlock 科技公司创始人",
    "",
    "Fabian Schuh (Xeroc) , 区块链项目CTO",
    "Ryan R. Fox,比特股核心团队组织者",
    "Alex Shkor，Scorum项目CTO，DEIP.world创始人",
    "王超，铂链CTO",
    "赵微（老狼），OracleChain 创始人兼 CEO",
    "曹飞",
    "陈澄",
    "赵聆言，未来版权项目创始人，链娱科技CEO",
    "梓岑，HelloEOS",
    "吴亚皇，MEET.ONE项目CTO",
    "胖哥，EOS Cannon共建者，BYSTAKE创始人，”胖哥说币”自媒体主理人",
    "吴子臻，Chaince交易平台创始人兼CEO",
    "谭智勇（主持人），老狼，廖洋阳 赵聆言 梓岑 吴亚皇 胖哥 吴子臻"
  ],
}

const assist = {
  title: '协办方',
  para: `Blockchain Centre自2014年在墨尔本成立以来，始终致力于区块链知识在全球范围内的教育培养与宣传，现已在澳大利亚、中国、美国、马来西亚、立陶宛先后成立分中心。中心积极与产业界合作，与AWS、微软和IBM等科技巨头建立合作关系。Blockchain Centre中国区总部位于上海，将在全国主要城市建立分中心，致力于建立区块链技术人才的“黄埔军校”，构建以教育为核心的区块链人才生态，助推全球社会变革。`,
  para2: 'Blockshine Technology博聚科技是全球领先的区块链行业一站式服务及解决方案供应商。致力于区块链技术和应用开发，为科技项目开发、区块链应用开发等方面提供整体解决方案与顾问咨询服务。凭借创新的科技手段、丰富的业内资源，我们为企业用户提供数据研究与分析服务，量身打造区块链/科技项目IP运营方案、品牌运营方案，最大化地提高商业价值和品牌影响力。',
  para3:"币问（www.bitask.org）是面向区块链/数字货币的问答平台",
  para4:"币乎(bihu.com)是一个有营养的币圈社区，秉承着“好文有好报”的理念，帮助代币投资者更好地了解和投资数字资产，同时通过代币激励的方式使得用户的付出获得相应的回报。币乎不仅是代币投资者的一站式信息集散地，行业意见领袖和优质内容创作者的驻扎地，也是各个“币官方”与“币友”交流的平台。币乎也引入了币乎ID，以实现平台的透明化运作。",
  para5:'共享财经（www.gongxiangcj.com）诞生于2015年，是最早从事于区块链行业的媒体之一，公司是一家创新型产业链媒体，定位于区块链综合服务提供商，关注区块链行业最新讯息及金融科技投融资领域。目前共享财经旗下拥有共享财经门户网站、新媒体《区块链新金融》、数链APP，是集资讯、投研、数据与区块链金融服务于一体的一站式平台，目前用户集群达到数十万人，覆盖主流金融和区块链行业人士，其新闻报道质量和产品体验受到市场欢迎和认可。'}

const partner = {
  title: '合作媒体 (持续更新)',
}

export const footer = {
  title: '联系我们',
  cp: '媒体/商务合作',
  tel: '+86 15851461946',
  emailbox: '邮箱',
  email: 'graphene.devcon@foxmail.com',
  consult: '会务咨询',
  info: 'graphene_assistant@foxmail.com',
  weibo: '微博',
  twitter: '推特',
}

const menu = [
  '大会介绍',
  '演讲嘉宾',
  '主办方',
  '赞助权益',
  '联系我们',
  '购票入口',
  '赞助商'
]
const faq = {
  title: 'FAQ',
  q1: "我想了解一下大会地点",
  q2: "从机场或火车站如何去上海卓美亚喜马拉雅酒店？",
  q3: "我英语水平欠佳，会议期间会提供翻译设备吗？",
  q4: "赞助相关，赞助权益有哪些，联系谁？",
  q5: "活动当天提供餐饮吗？",
  q6: "我想了解一下活动地点周边休闲娱乐场所",
  a1: "卓美亚喜玛拉雅屹立于上海浦东，由曾主持设计西班牙巴塞罗那体育馆和洛杉矶现代美术馆的国际着名建筑大师矶崎新先生设计。酒店开业时间2011年4月，楼高21层，客房总数393间（套）。",
  a2:{
		a:`✔︎【上海虹桥机场（一号航/二号航站楼）/上海浦东国际机场-酒店】乘地铁2号线至龙阳路，转7号线至花木路，3号口出站即到酒店。`,
		b:`✔︎【上海火车站-酒店】乘地铁1号线至人民广场，转2号线至龙阳路，转7号线至花木路，3号口出站即到酒店。`,
		c:`✔︎【虹桥火车站-酒店】乘地铁2号线至龙阳路，转7号线至花木路，3号口出站即到酒店。`,
	},
  a3: "期间我们会准备数量充足的同传设备，保证信息传递和交流的通畅；届时您只需要凭借身份证就可以到场免费换取同传设备。",
  a4: "赞助商合作，请联系Linda，电话 15851461946，邮箱 graphene.devcon@foxmail.com",
  a5: "仅VIP票包含午餐（两天）和晚宴，早鸟票、普通票不提供饭食，资料袋含有休闲零食",
  a6: " 嘉里中心 陆家嘴  东方明珠 国金中心 上海中心 上海外滩 新天地 田字坊（酒吧）南京路步行街  豫园城隍庙 （小吃 商业街 土特产）"
}

const ticket = 'https://www.bagevent.com/event/1274864'


const cn = {
  faq,
  intro,
  lookback,
  overview,
  star,
  vip,
  schedule, schedule2,
  host,
  assist,
  partner,
  sponsor,
  footer,
  pannel,
  session,
  menu,
  ticket,
}

export default cn
