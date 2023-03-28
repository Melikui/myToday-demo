/**
 * @author: LK
 * @desc: JS基础
 */

// console.log(navigator.userAgent);
let arr = [1, 2, 3, 4];
console.log(arr.indexOf(4));

let LIST = [
    {
        ROOT_PD_CLS_NM: "信用卡",
        ROOT_PD_CLS_NO: "CRD",
        PROD_LIST: [
            {
                CHNL_PD_CLS_NM: "信用卡",
                CHNL_PD_CLS_NO: "CRD",
                PROD_NAME_LIST: [
                    { PD_ALS_NM: "全行卡2", PD_CD: "" },
                    { PD_ALS_NM: "全乐卡", PD_CD: "" },
                    { PD_ALS_NM: "全利卡", PD_CD: "" },
                    { PD_ALS_NM: "钱钱卡", PD_CD: "" },
                    { PD_ALS_NM: "全乐金逸卡", PD_CD: "" },
                    { PD_ALS_NM: "女神卡", PD_CD: "" },
                    { PD_ALS_NM: "JJMALL联名卡", PD_CD: "" },
                    { PD_ALS_NM: "标准卡", PD_CD: "" },
                    { PD_ALS_NM: "VISA卡", PD_CD: "" },
                    { PD_ALS_NM: "公益基金卡", PD_CD: "" },
                    { PD_ALS_NM: "车主卡", PD_CD: "" },
                    { PD_ALS_NM: "WE卡", PD_CD: "" },
                    { PD_ALS_NM: "粤通卡", PD_CD: "" },
                    { PD_ALS_NM: "全飞卡", PD_CD: "" },
                    { PD_ALS_NM: "缤纷卡", PD_CD: "" },
                    { PD_ALS_NM: "联通联名卡", PD_CD: "" },
                    { PD_ALS_NM: "万隆城联名卡", PD_CD: "" },
                    { PD_ALS_NM: "力美健联名卡", PD_CD: "" },
                    { PD_ALS_NM: "京东金融联名卡", PD_CD: "" },
                    { PD_ALS_NM: "美运卡", PD_CD: "" },
                    { PD_ALS_NM: "DIY卡", PD_CD: "" },
                    { PD_ALS_NM: "咪咕白金卡", PD_CD: "" },
                    { PD_ALS_NM: "咪咕金卡", PD_CD: "" },
                    { PD_ALS_NM: "超V卡", PD_CD: "" },
                    { PD_ALS_NM: "聚惠卡", PD_CD: "" },
                ],
            },
        ],
    },
    {
        ROOT_PD_CLS_NM: "存款",
        ROOT_PD_CLS_NO: "DEP",
        PROD_LIST: [
            {
                PROD_NAME_LIST: [{ PD_ALS_NM: "双整存款", PD_CD: "A0212M" }],
                CHNL_PD_CLS_NM: "整存整取",
                CHNL_PD_CLS_NO: "DEP0000001",
            },
            {
                PROD_NAME_LIST: [
                    { PD_ALS_NM: "2024第二十八期个人存单", PD_CD: "GR202428" },
                    { PD_ALS_NM: "大额存单ZHF", PD_CD: "ZH001" },
                    { PD_ALS_NM: "大额存单三期", PD_CD: "ZHF003" },
                    { PD_ALS_NM: "业务凭证测试", PD_CD: "SIT102" },
                    { PD_ALS_NM: "产品利率显示", PD_CD: "sit777" },
                    { PD_ALS_NM: "XZ大额存单03", PD_CD: "1811211730" },
                ],
                CHNL_PD_CLS_NM: "大额存单",
                CHNL_PD_CLS_NO: "DEP0000002",
            },
            {
                PROD_NAME_LIST: [
                    { PD_ALS_NM: "2022下半年的幸福", PD_CD: "1000030001" },
                    { PD_ALS_NM: "2022年第一季度的幸福", PD_CD: "1000020002" },
                    { PD_ALS_NM: "幸福啊幸福", PD_CD: "1000010001" },
                    { PD_ALS_NM: "2022年第一季度的幸福", PD_CD: "1000020003" },
                    { PD_ALS_NM: "2022下半年的幸福", PD_CD: "1000030002" },
                    { PD_ALS_NM: "幸福啊幸福", PD_CD: "1000010002" },
                ],
                CHNL_PD_CLS_NM: "幸福存款",
                CHNL_PD_CLS_NO: "DEP0000003",
            },
            {
                PROD_NAME_LIST: [
                    { PD_ALS_NM: "史蒂夫", PD_CD: "PRO20201201102236" },
                    { PD_ALS_NM: "2112", PD_CD: "PRO20201126144650" },
                    { PD_ALS_NM: "玩儿文二", PD_CD: "PRO20201201102847" },
                ],
                CHNL_PD_CLS_NM: "美满存单",
                CHNL_PD_CLS_NO: "DEP0000004",
            },
        ],
    },
    {
        ROOT_PD_CLS_NM: "理财",
        ROOT_PD_CLS_NO: "FIN",
        PROD_LIST: [
            {
                PROD_NAME_LIST: [
                    { PD_ALS_NM: "1234623723", PD_CD: "1234623723" },
                    {
                        PD_ALS_NM: "净值周期-持仓子周期取数001",
                        PD_CD: "CCZZQQS001",
                    },
                    { PD_ALS_NM: "CYZ类货币01", PD_CD: "CYZLHB0001" },
                    { PD_ALS_NM: "CYZ-类货币0002", PD_CD: "CYZLHB0002" },
                    { PD_ALS_NM: "CYZ-类货币03", PD_CD: "CYZLHB0003" },
                    { PD_ALS_NM: "定投产品类货币①号", PD_CD: "DTXYCP0001" },
                    { PD_ALS_NM: "定投类货币②号", PD_CD: "DTXYCP0002" },
                    {
                        PD_ALS_NM: "叶子金米智多金UAT测试002",
                        PD_CD: "DXJMZDJ002",
                    },
                    {
                        PD_ALS_NM: "短信优化-净值周期-赎回02",
                        PD_CD: "DXYHXYZQ02",
                    },
                ],
                CHNL_PD_CLS_NM: "理财",
                CHNL_PD_CLS_NO: "FIN",
            },
        ],
    },
];

let obj = {
    CHNL_PD_CLS_NO: "",
    CHNL_PD_NO: "",
    CREAT_TIME: "2023-03-23 10:27:03",
    CUST_NAME: "未授权客户",
    CUST_TYPE: "",
    EVAL_COMMENT: "safdsfa",
    MANAGER_NAME: "",
    ORGAN_NAME: "广州农商银行总行",
    PD_CD: "",
    PROD_DETAIL_TYPE: "",
    PROD_NAME: "",
    PROD_TYPE: "",
    PROD_TYPE_NAME: "",
    RANK_COMMENT: "5",
};
