'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	up: async (queryInterface, Sequelize ) => {
		await queryInterface.bulkInsert('Companies',[
		  {
			id: 1,
			country_id: 1,
			company_name: '서울시',
			company_type: 'public - goverment',
			company_CEO:  '오세훈',
			company_tel:  '120',
			company_mob:  '010-2323-7552',
			company_email: '120@seoul.go.kr',
			company_address: '',
			company_business_number: '',
			bigo: '',
			user_mod: 1,
			is_deleted: false,
			createdAt: '2023-04-03 00:00:00',
			updatedAt: '2023-04-03 00:00:00'
		  },
		  {
		  	id: 2,
			country_id: 1,
			company_name: '부산시청',
			company_type: 'public - goverment',
			company_CEO:  '박형준',
			company_tel:  '120',
			company_mob:  '010-0000-0000',
			company_email: '120@seoul.go.kr',
			company_address: '부산 연제구 중앙대로 1001 (연산동)',
			company_business_number: '',
			bigo: '',
			user_mod: 1,
			is_deleted: false,
			createdAt: '2023-04-03 00:00:00',
			updatedAt: '2023-04-03 00:00:00'
		  },
		  {
		  	id: 3,
			country_id: 1,
			company_name: '대구시청',
			company_type: 'public - goverment',
			company_CEO:  '권영진',
			company_tel:  '120',
			company_mob:  '010-2323-7552',
			company_email: '',
			company_address: '대구 수성구 황금동',
			company_business_number: '',
			bigo: '',
			user_mod: 1,
			is_deleted: false,
			createdAt: '2023-04-03 00:00:00',
			updatedAt: '2023-04-03 00:00:00'
		  },
		  {
		  	id: 4,
			country_id: 1,
			company_name: '인천시',
			company_type: 'public - goverment',
			company_CEO:  '박남춘',
			company_tel:  '120',
			company_mob:  '010-0000-0000',
			company_email: '',
			company_address: '인천 남동구 정각로 29 (구월동)',
			company_business_number: '',
			bigo: '',
			user_mod: 1,
			is_deleted: false,
			createdAt: '2023-04-03 00:00:00',
			updatedAt: '2023-04-03 00:00:00'
		  },
		  {
		  	id: 5,
			country_id: 1,
			company_name: '광주시청',
			company_type: 'public - goverment',
			company_CEO:  '이용섭',
			company_tel:  '062-120',
			company_mob:  '010-0000-0000',
			company_email: '',
			company_address: '광주 서구 내방로 111 (치평동)',
			company_business_number: '',
			bigo: '',
			user_mod: 1,
			is_deleted: false,
			createdAt: '2023-04-03 00:00:00',
			updatedAt: '2023-04-03 00:00:00'
		  },
		  {
		  	id: 6,
			country_id: 1,
			company_name: '대전광역시',
			company_type: 'public - goverment',
			company_CEO:  '허태정',
			company_tel:  '042-270-3151',
			company_mob:  '010-0000-0000',
			company_email: '',
			company_address: '대전 서구 둔산로 100 (둔산동)',
			company_business_number: '',
			bigo: '',
			user_mod: 1,
			is_deleted: false,
			createdAt: '2023-04-03 00:00:00',
			updatedAt: '2023-04-03 00:00:00'
		  },
		  {
		  	id: 7,
			country_id: 1,
			company_name: '울산시청',
			company_type: 'public - goverment',
			company_CEO:  '송철호',
			company_tel:  '052-120',
			company_mob:  '010-2323-7552',
			company_email: '',
			company_address: '울산 남구 삼산중로 149 (삼산동)',
			company_business_number: '',
			bigo: '',
			user_mod: 1,
			is_deleted: false,
			createdAt: '2023-04-03 00:00:00',
			updatedAt: '2023-04-03 00:00:00'
		  },
		  {
		  	id: 8,
			country_id: 1,
			company_name: '성남시청',
			company_type: 'public - goverment',
			company_CEO:  '은수미',
			company_tel:  '',
			company_mob:  '010-0000-0000',
			company_email: '',
			company_address: '경기 성남시 중원구 성남대로 997 (여수동)',
			company_business_number: '',
			bigo: '',
			user_mod: 1,
			is_deleted: false,
			createdAt: '2023-04-03 00:00:00',
			updatedAt: '2023-04-03 00:00:00'
		  },
		  {
		  	id: 9,
			country_id: 1,
			company_name: '의정부시청',
			company_type: 'public - goverment',
			company_CEO:  '안병용',
			company_tel:  '',
			company_mob:  '010-0000-0000',
			company_email: '',
			company_address: '경기 의정부시 시민로 1 (의정부동)',
			company_business_number: '',
			bigo: '',
			user_mod: 1,
			is_deleted: false,
			createdAt: '2023-04-03 00:00:00',
			updatedAt: '2023-04-03 00:00:00'
		  },
		  {
		  	id: 10,
			country_id: 1,
			company_name: '평택시청',
			company_type: 'public - goverment',
			company_CEO:  '정장선',
			company_tel:  '',
			company_mob:  '010-0000-0000',
			company_email: '',
			company_address: '경기 평택시 경기대로 245 (비전동)',
			company_business_number: '',
			bigo: '',
			user_mod: 1,
			is_deleted: false,
			createdAt: '2023-04-03 00:00:00',
			updatedAt: '2023-04-03 00:00:00'
		  },
		  {
		  	id: 11,
			country_id: 1,
			company_name: '안산시청',
			company_type: 'public - goverment',
			company_CEO:  '윤화섭',
			company_tel:  '',
			company_mob:  '010-0000-0000',
			company_email: '',
			company_address: '경기 안산시 단원구 능안로 81 (신길동)',
			company_business_number: '',
			bigo: '',
			user_mod: 1,
			is_deleted: false,
			createdAt: '2023-04-03 00:00:00',
			updatedAt: '2023-04-03 00:00:00'
		  },
		  {
		  	id: 12,
			country_id: 1,
			company_name: '고양시청',
			company_type: 'public - goverment',
			company_CEO:  '이재준',
			company_tel:  '',
			company_mob:  '010-0000-0000',
			company_email: '',
			company_address: '경기 고양시 덕양구 고양시청로 10 (주교동)',
			company_business_number: '',
			bigo: '',
			user_mod: 1,
			is_deleted: false,
			createdAt: '2023-04-03 00:00:00',
			updatedAt: '2023-04-03 00:00:00'
		  },
		  {
		  	id: 13,
			country_id: 1,
			company_name: '수원시청',
			company_type: 'public - goverment',
			company_CEO:  '염태영',
			company_tel:  '',
			company_mob:  '010-0000-0000',
			company_email: '',
			company_address: '경기 수원시 팔달구 효원로 241 (인계동)',
			company_business_number: '',
			bigo: '',
			user_mod: 1,
			is_deleted: false,
			createdAt: '2023-04-03 00:00:00',
			updatedAt: '2023-04-03 00:00:00'
		  },
		  {
		  	id: 14,
			country_id: 1,
			company_name: '남양주시청',
			company_type: 'public - goverment',
			company_CEO:  '조광한',
			company_tel:  '031-590-8272',
			company_mob:  '010-0000-0000',
			company_email: '',
			company_address: '경기 남양주시 경춘로 1037 (금곡동)',
			company_business_number: '',
			bigo: '',
			user_mod: 1,
			is_deleted: false,
			createdAt: '2023-04-03 00:00:00',
			updatedAt: '2023-04-03 00:00:00'
		  },
		  {
		  	id: 15,
			country_id: 1,
			company_name: '의왕시청',
			company_type: 'public - goverment',
			company_CEO:  '김상돈',
			company_tel:  '',
			company_mob:  '010-0000-0000',
			company_email: '',
			company_address: '경기 의왕시 시청로 11 (고천동)',
			company_business_number: '',
			bigo: '',
			user_mod: 1,
			is_deleted: false,
			createdAt: '2023-04-03 00:00:00',
			updatedAt: '2023-04-03 00:00:00'
		  },
		  {
		  	id: 16,
			country_id: 1,
			company_name: '하남시청',
			company_type: 'public - goverment',
			company_CEO:  '김상호',
			company_tel:  '',
			company_mob:  '010-0000-0000',
			company_email: '',
			company_address: '경기 하남시 대청로 10 (신장동)',
			company_business_number: '',
			bigo: '',
			user_mod: 1,
			is_deleted: false,
			createdAt: '2023-04-03 00:00:00',
			updatedAt: '2023-04-03 00:00:00'
		  },
		  {
		  	id: 17,
			country_id: 1,
			company_name: '용인시청',
			company_type: 'public - goverment',
			company_CEO:  '백군기',
			company_tel:  '031-324-2114',
			company_mob:  '010-0000-0000',
			company_email: '',
			company_address: '경기 용인시 처인구 중부대로 1199 (삼가동)',
			company_business_number: '',
			bigo: '',
			user_mod: 1,
			is_deleted: false,
			createdAt: '2023-04-03 00:00:00',
			updatedAt: '2023-04-03 00:00:00'
		  },
		  {
		  	id: 18,
			country_id: 1,
			company_name: '파주시청',
			company_type: 'public - goverment',
			company_CEO:  '최종환',
			company_tel:  '',
			company_mob:  '010-0000-0000',
			company_email: '',
			company_address: '경기 파주시 시청로 50 (아동동)',
			company_business_number: '',
			bigo: '',
			user_mod: 1,
			is_deleted: false,
			createdAt: '2023-04-03 00:00:00',
			updatedAt: '2023-04-03 00:00:00'
		  },
		  {
		  	id: 19,
			country_id: 1,
			company_name: '광주시청',
			company_type: 'public - goverment',
			company_CEO:  '신동헌',
			company_tel:  '031-760-2000',
			company_mob:  '010-0000-0000',
			company_email: '',
			company_address: '경기 광주시 경안로 17 (경안동)',
			company_business_number: '',
			bigo: '',
			user_mod: 1,
			is_deleted: false,
			createdAt: '2023-04-03 00:00:00',
			updatedAt: '2023-04-03 00:00:00'
		  },
		  {
		  	id: 20,
			country_id: 1,
			company_name: '안양시청',
			company_type: 'public - goverment',
			company_CEO:  '최대호',
			company_tel:  '',
			company_mob:  '010-0000-0000',
			company_email: '',
			company_address: '경기 안양시 동안구 시민대로 235 (관양동)',
			company_business_number: '',
			bigo: '',
			user_mod: 1,
			is_deleted: false,
			createdAt: '2023-04-03 00:00:00',
			updatedAt: '2023-04-03 00:00:00'
		  },
		  {
		  	id: 21,
			country_id: 1,
			company_name: '부천시청',
			company_type: 'public - goverment',
			company_CEO:  '장덕천',
			company_tel:  '',
			company_mob:  '010-0000-0000',
			company_email: '',
			company_address: '경기 부천시 길주로 210 (중동)',
			company_business_number: '',
			bigo: '',
			user_mod: 1,
			is_deleted: false,
			createdAt: '2023-04-03 00:00:00',
			updatedAt: '2023-04-03 00:00:00'
		  },
		  {
		  	id: 22,
			country_id: 1,
			company_name: '구리시청',
			company_type: 'public - goverment',
			company_CEO:  '안승남',
			company_tel:  '',
			company_mob:  '010-0000-0000',
			company_email: '',
			company_address: '경기 구리시 아차산로 439 (교문동)',
			company_business_number: '',
			bigo: '',
			user_mod: 1,
			is_deleted: false,
			createdAt: '2023-04-03 00:00:00',
			updatedAt: '2023-04-03 00:00:00'
		  },
		  {
		  	id: 23,
			country_id: 1,
			company_name: '포천시청',
			company_type: 'public - goverment',
			company_CEO:  '박윤국',
			company_tel:  '',
			company_mob:  '010-0000-0000',
			company_email: '',
			company_address: '경기 포천시 중앙로 87 (신읍동)',
			company_business_number: '',
			bigo: '',
			user_mod: 1,
			is_deleted: false,
			createdAt: '2023-04-03 00:00:00',
			updatedAt: '2023-04-03 00:00:00'
		  },
		  {
		  	id: 24,
			country_id: 1,
			company_name: '원주시청',
			company_type: 'public - goverment',
			company_CEO:  '원창묵',
			company_tel:  '033-742-2111',
			company_mob:  '010-0000-0000',
			company_email: '',
			company_address: '강원 원주시 동부순환로 183 (반곡동)',
			company_business_number: '',
			bigo: '',
			user_mod: 1,
			is_deleted: false,
			createdAt: '2023-04-03 00:00:00',
			updatedAt: '2023-04-03 00:00:00'
		  },
		  {
		  	id: 25,
			country_id: 1,
			company_name: '청주시청',
			company_type: 'public - goverment',
			company_CEO:  '한범덕',
			company_tel:  '',
			company_mob:  '010-0000-0000',
			company_email: '',
			company_address: '충북 청주시 상당구 상당로 155 (북문로3가)',
			company_business_number: '',
			bigo: '',
			user_mod: 1,
			is_deleted: false,
			createdAt: '2023-04-03 00:00:00',
			updatedAt: '2023-04-03 00:00:00'
		  },
		  {
		  	id: 26,
			country_id: 1,
			company_name: '당진시청',
			company_type: 'public - goverment',
			company_CEO:  '김홍장',
			company_tel:  '',
			company_mob:  '010-0000-0000',
			company_email: '',
			company_address: '충남 당진시 시청1로 1 (수청동)',
			company_business_number: '',
			bigo: '',
			user_mod: 1,
			is_deleted: false,
			createdAt: '2023-04-03 00:00:00',
			updatedAt: '2023-04-03 00:00:00'
		  },
		  {
		  	id: 27,
			country_id: 1,
			company_name: '보령시청',
			company_type: 'public - goverment',
			company_CEO:  '김동일',
			company_tel:  '041-930-3114',
			company_mob:  '010-0000-0000',
			company_email: '',
			company_address: '충남 보령시 성주산로 77 (명천동)',
			company_business_number: '',
			bigo: '',
			user_mod: 1,
			is_deleted: false,
			createdAt: '2023-04-03 00:00:00',
			updatedAt: '2023-04-03 00:00:00'
		  },
		  {
		  	id: 28,
			country_id: 1,
			company_name: '서산시청',
			company_type: 'public - goverment',
			company_CEO:  '맹정호',
			company_tel:  '041-660-2323',
			company_mob:  '010-6311-8077',
			company_email: '',
			company_address: '충남 서산시 한마음13로 6 (석림동)',
			company_business_number: '',
			bigo: '',
			user_mod: 1,
			is_deleted: false,
			createdAt: '2023-04-03 00:00:00',
			updatedAt: '2023-04-03 00:00:00'
		  },
		  {
		  	id: 29,
			country_id: 1,
			company_name: '아산시청',
			company_type: 'public - goverment',
			company_CEO:  '오세현',
			company_tel:  '',
			company_mob:  '010-0000-0000',
			company_email: '',
			company_address: '충남 아산시 시민로 456 (온천동)',
			company_business_number: '',
			bigo: '',
			user_mod: 1,
			is_deleted: false,
			createdAt: '2023-04-03 00:00:00',
			updatedAt: '2023-04-03 00:00:00'
		  },
		  {
		  	id: 30,
			country_id: 1,
			company_name: '천안시청',
			company_type: 'public - goverment',
			company_CEO:  '박상돈',
			company_tel:  '041-521-5640',
			company_mob:  '010-4922-8319',
			company_email: '',
			company_address: '충남 천안시 서북구 번영로 156 (불당동)',
			company_business_number: '',
			bigo: '',
			user_mod: 1,
			is_deleted: false,
			createdAt: '2023-04-03 00:00:00',
			updatedAt: '2023-04-03 00:00:00'
		  },
		  {
		  	id: 31,
			country_id: 1,
			company_name: '홍성군청',
			company_type: 'public - goverment',
			company_CEO:  '김석환',
			company_tel:  '',
			company_mob:  '010-0000-0000',
			company_email: '',
			company_address: '충남 홍성군 홍북읍 충남대로 21',
			company_business_number: '',
			bigo: '',
			user_mod: 1,
			is_deleted: false,
			createdAt: '2023-04-03 00:00:00',
			updatedAt: '2023-04-03 00:00:00'
		  },
		  {
		  	id: 32,
			country_id: 1,
			company_name: '군산시청',
			company_type: 'public - goverment',
			company_CEO:  '강임준',
			company_tel:  '063-454-4000',
			company_mob:  '010-0000-0000',
			company_email: '',
			company_address: '전북 군산시 시청로 17 (조촌동)',
			company_business_number: '',
			bigo: '',
			user_mod: 1,
			is_deleted: false,
			createdAt: '2023-04-03 00:00:00',
			updatedAt: '2023-04-03 00:00:00'
		  },
		  {
		  	id: 33,
			country_id: 1,
			company_name: '전주시청',
			company_type: 'public - goverment',
			company_CEO:  '김승수',
			company_tel:  '',
			company_mob:  '010-0000-0000',
			company_email: '',
			company_address: '전북 전주시 완산구 장승배기5길 4-13 (서서학동)',
			company_business_number: '',
			bigo: '',
			user_mod: 1,
			is_deleted: false,
			createdAt: '2023-04-03 00:00:00',
			updatedAt: '2023-04-03 00:00:00'
		  },
		  {
		  	id: 34,
			country_id: 1,
			company_name: '경산시청',
			company_type: 'public - goverment',
			company_CEO:  '최영조',
			company_tel:  '053-811-2231',
			company_mob:  '010-0000-0000',
			company_email: '',
			company_address: '경북 경산시 남매로 159 (중방동)',
			company_business_number: '',
			bigo: '',
			user_mod: 1,
			is_deleted: false,
			createdAt: '2023-04-03 00:00:00',
			updatedAt: '2023-04-03 00:00:00'
		  },
		  {
		  	id: 35,
			country_id: 1,
			company_name: '구미시청',
			company_type: 'public - goverment',
			company_CEO:  '장세용',
			company_tel:  '',
			company_mob:  '010-0000-0000',
			company_email: '',
			company_address: '경북 구미시 송정대로 55 (송정동)',
			company_business_number: '',
			bigo: '',
			user_mod: 1,
			is_deleted: false,
			createdAt: '2023-04-03 00:00:00',
			updatedAt: '2023-04-03 00:00:00'
		  },
		  {
		  	id: 36,
			country_id: 1,
			company_name: '포항시청',
			company_type: 'public - goverment',
			company_CEO:  '이강덕',
			company_tel:  '054-270-8282',
			company_mob:  '010-0000-0000',
			company_email: '',
			company_address: '경북 포항시 남구 시청로 1 (대잠동)',
			company_business_number: '',
			bigo: '',
			user_mod: 1,
			is_deleted: false,
			createdAt: '2023-04-03 00:00:00',
			updatedAt: '2023-04-03 00:00:00'
		  },
		  {
		  	id: 37,
			country_id: 1,
			company_name: '김해공항',
			company_type: 'public - goverment',
			company_CEO:  '허성곤',
			company_tel:  '',
			company_mob:  '010-0000-0000',
			company_email: '',
			company_address: '부산 강서구 공항진입로42번길 54 (대저2동)',
			company_business_number: '',
			bigo: '',
			user_mod: 1,
			is_deleted: false,
			createdAt: '2023-04-03 00:00:00',
			updatedAt: '2023-04-03 00:00:00'
		  },
		  {
		  	id: 38,
			country_id: 1,
			company_name: '김해시청',
			company_type: 'public - goverment',
			company_CEO:  '허성곤',
			company_tel:  '1577-9400',
			company_mob:  '010-2323-7552',
			company_email: '',
			company_address: '경남 김해시 김해대로 2401 (부원동)',
			company_business_number: '',
			bigo: '',
			user_mod: 1,
			is_deleted: false,
			createdAt: '2023-04-03 00:00:00',
			updatedAt: '2023-04-03 00:00:00'
		  },
		  {
		  	id: 39,
			country_id: 1,
			company_name: '사천시청',
			company_type: 'public - goverment',
			company_CEO:  '송도근',
			company_tel:  '055-831-211',
			company_mob:  '010-0000-0000',
			company_email: '',
			company_address: '경남 사천시 용현면 시청로 77',
			company_business_number: '',
			bigo: '',
			user_mod: 1,
			is_deleted: false,
			createdAt: '2023-04-03 00:00:00',
			updatedAt: '2023-04-03 00:00:00'
		  },
		  {
		  	id: 40,
			country_id: 1,
			company_name: '양산시청',
			company_type: 'public - goverment',
			company_CEO:  '김일권',
			company_tel:  '',
			company_mob:  '010-0000-0000',
			company_email: '',
			company_address: '경남 양산시 중앙로 39 (남부동)',
			company_business_number: '',
			bigo: '',
			user_mod: 1,
			is_deleted: false,
			createdAt: '2023-04-03 00:00:00',
			updatedAt: '2023-04-03 00:00:00'
		  },
		  {
		  	id: 41,
			country_id: 1,
			company_name: '진주시청',
			company_type: 'public - goverment',
			company_CEO:  '조규일',
			company_tel:  '',
			company_mob:  '010-0000-0000',
			company_email: '',
			company_address: '경남 진주시 동진로 155 (상대동)',
			company_business_number: '',
			bigo: '',
			user_mod: 1,
			is_deleted: false,
			createdAt: '2023-04-03 00:00:00',
			updatedAt: '2023-04-03 00:00:00'
		  },
		  {
		  	id: 42,
			country_id: 1,
			company_name: '창원시청',
			company_type: 'public - goverment',
			company_CEO:  '허성무',
			company_tel:  '1899-1111',
			company_mob:  '010-0000-0000',
			company_email: '',
			company_address: '경남 창원시 의창구 중앙대로 151 (용호동)',
			company_business_number: '',
			bigo: '',
			user_mod: 1,
			is_deleted: false,
			createdAt: '2023-04-03 00:00:00',
			updatedAt: '2023-04-03 00:00:00'
		  },
		  {
		  	id: 43,
			country_id: 1,
			company_name: '통영시청',
			company_type: 'public - goverment',
			company_CEO:  '강석주',
			company_tel:  '',
			company_mob:  '010-0000-0000',
			company_email: '',
			company_address: '경남 통영시 통영해안로 515 (무전동)',
			company_business_number: '',
			bigo: '',
			user_mod: 1,
			is_deleted: false,
			createdAt: '2023-04-03 00:00:00',
			updatedAt: '2023-04-03 00:00:00'
		  },
		  {
		  	id: 44,
			country_id: 1,
			company_name: '제주특별자치도',
			company_type: 'public - goverment',
			company_CEO:  '제주자치경찰단장',
			company_tel:  '064-120',
			company_mob:  '064-120',
			company_email: 'yb2030@korea.kr',
			company_address: '제주특별자치도 제주시 광양9길 3 (이도2동)',
			company_business_number: '',
			bigo: '',
			user_mod: 1,
			is_deleted: false,
			createdAt: '2023-04-03 00:00:00',
			updatedAt: '2023-04-03 00:00:00'
		  }
		],{});
	},

	down: async(queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('Companies', null, {})
	}
};