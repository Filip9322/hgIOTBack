'use strict';
/**  @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		// Bulk Insertion of Wide areas in Korea
		await queryInterface.bulkInsert('Wide_Areas', [
		{
			id: 1,
			wa_name: '서울',
			wa_long_name: '서울특별시',
			wa_logo: '',
			country_id: 1,
			country_wa_term: '특별시',
			bigo: '',
			user_mod: 1,
			is_deleted: false
		},
		{
			id: 2,
			wa_name: '부산',
			wa_long_name: '부산광역시',
			wa_logo: '',
			country_id: 1,
			country_wa_term: '광역시',
			bigo: '',
			user_mod: 1,
			is_deleted: false
		},
		{
			id: 3,
			wa_name: '대구',
			wa_long_name: '대구광역시',
			wa_logo: '',
			country_id: 1,
			country_wa_term: '광역시',
			bigo: '',
			user_mod: 1,
			is_deleted: false
		},
		{
			id: 4,
			wa_name: '인천',
			wa_long_name: '인천광역시',
			wa_logo: '',
			country_id: 1,
			country_wa_term: '광역시',
			bigo: '',
			user_mod: 1,
			is_deleted: false
		},
		{
			id: 5,
			wa_name: '광주',
			wa_long_name: '광주광역시',
			wa_logo: '',
			country_id: 1,
			country_wa_term: '광역시',
			bigo: '',
			user_mod: 1,
			is_deleted: false
		},
		{
			id: 6,
			wa_name: '대전',
			wa_long_name: '대전광역시',
			wa_logo: '',
			country_id: 1,
			country_wa_term: '광역시',
			bigo: '',
			user_mod: 1,
			is_deleted: false
		},
		{
			id: 7,
			wa_name: '울산',
			wa_long_name: '울산광역시',
			wa_logo: '',
			country_id: 1,
			country_wa_term: '광역시',
			bigo: '',
			user_mod: 1,
			is_deleted: false
		},
		{
			id: 8,
			wa_name: '세종',
			wa_long_name: '세종특별자치시',
			wa_logo: '',
			country_id: 1,
			country_wa_term: '특별자치시',
			bigo: '',
			user_mod: 1,
			is_deleted: false
		},
		{
			id: 9,
			wa_name: '경기',
			wa_long_name: '경기도',
			wa_logo: '',
			country_id: 1,
			country_wa_term: '도',
			bigo: '',
			user_mod: 1,
			is_deleted: false
		},
		{
			id: 10,
			wa_name: '강원',
			wa_long_name: '강원도',
			wa_logo: '',
			country_id: 1,
			country_wa_term: '도',
			bigo: '',
			user_mod: 1,
			is_deleted: false
		},
		{
			id: 11,
			wa_name: '충북',
			wa_long_name: '충청북도',
			wa_logo: '',
			country_id: 1,
			country_wa_term: '도',
			bigo: '',
			user_mod: 1,
			is_deleted: false
		},
		{
			id: 12,
			wa_name: '충남',
			wa_long_name: '충렁남도',
			wa_logo: '',
			country_id: 1,
			country_wa_term: '도',
			bigo: '',
			user_mod: 1,
			is_deleted: false
		},
		{
			id: 13,
			wa_name: '전북',
			wa_long_name: '전라북도',
			wa_logo: '',
			country_id: 1,
			country_wa_term: '도',
			bigo: '',
			user_mod: 1,
			is_deleted: false
		},
		{
			id: 14,
			wa_name: '전남',
			wa_long_name: '전라남도',
			wa_logo: '',
			country_id: 1,
			country_wa_term: '도',
			bigo: '',
			user_mod: 1,
			is_deleted: false
		},
		{
			id: 15,
			wa_name: '경북',
			wa_long_name: '경상북도',
			wa_logo: '',
			country_id: 1,
			country_wa_term: '도',
			bigo: '',
			user_mod: 1,
			is_deleted: false
		},
		{
			id: 16,
			wa_name: '경남',
			wa_long_name: '경상남도',
			wa_logo: '',
			country_id: 1,
			country_wa_term: '도',
			bigo: '',
			user_mod: 1,
			is_deleted: false
		},
		{
			id: 17,
			wa_name: '제주',
			wa_long_name: '제주특별자치도',
			wa_logo: '',
			country_id: 1,
			country_wa_term: '별자치도',
			bigo: '',
			user_mod: 1,
			is_deleted: false
		}
		], {});

	},

	async down (queryInterface, Sequelize) {
		await queryInterface.bulkDelete('Wide_Areas', null, {});
	}
};
