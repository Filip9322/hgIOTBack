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
			wa_logo: '/images/wide_areas/1-서울특별시.png',
			country_id: 1,
			country_wa_term: '특별시',
			bigo: '',
			user_mod: 1,
			is_deleted: false,
			createdAt: '2023-04-04 00:00:00',
      		updatedAt: '2023-04-04 00:00:00'
		},
		{
			id: 2,
			wa_name: '부산',
			wa_long_name: '부산광역시',
			wa_logo: '/images/wide_areas/2-부산광역시.png',
			country_id: 1,
			country_wa_term: '광역시',
			bigo: '',
			user_mod: 1,
			is_deleted: false,
			createdAt: '2023-04-04 00:00:00',
      		updatedAt: '2023-04-04 00:00:00'
		},
		{
			id: 3,
			wa_name: '대구',
			wa_long_name: '대구광역시',
			wa_logo: '/images/wide_areas/3-대구광역시.png',
			country_id: 1,
			country_wa_term: '광역시',
			bigo: '',
			user_mod: 1,
			is_deleted: false,
			createdAt: '2023-04-04 00:00:00',
      		updatedAt: '2023-04-04 00:00:00'
		},
		{
			id: 4,
			wa_name: '인천',
			wa_long_name: '인천광역시',
			wa_logo: '/images/wide_areas/4-인천광역시.png',
			country_id: 1,
			country_wa_term: '광역시',
			bigo: '',
			user_mod: 1,
			is_deleted: false,
			createdAt: '2023-04-04 00:00:00',
      		updatedAt: '2023-04-04 00:00:00'
		},
		{
			id: 5,
			wa_name: '광주',
			wa_long_name: '광주광역시',
			wa_logo: '/images/wide_areas/5-광주광역시.png',
			country_id: 1,
			country_wa_term: '광역시',
			bigo: '',
			user_mod: 1,
			is_deleted: false,
			createdAt: '2023-04-04 00:00:00',
      		updatedAt: '2023-04-04 00:00:00'
		},
		{
			id: 6,
			wa_name: '대전',
			wa_long_name: '대전광역시',
			wa_logo: '/images/wide_areas/6-대전광역시.png',
			country_id: 1,
			country_wa_term: '광역시',
			bigo: '',
			user_mod: 1,
			is_deleted: false,
			createdAt: '2023-04-04 00:00:00',
      		updatedAt: '2023-04-04 00:00:00'
		},
		{
			id: 7,
			wa_name: '울산',
			wa_long_name: '울산광역시',
			wa_logo: '/images/wide_areas/7-울산광역시.png',
			country_id: 1,
			country_wa_term: '광역시',
			bigo: '',
			user_mod: 1,
			is_deleted: false,
			createdAt: '2023-04-04 00:00:00',
      		updatedAt: '2023-04-04 00:00:00'
		},
		{
			id: 8,
			wa_name: '세종',
			wa_long_name: '세종특별자치시',
			wa_logo: '/images/wide_areas/8-세종특별자치시.png',
			country_id: 1,
			country_wa_term: '특별자치시',
			bigo: '',
			user_mod: 1,
			is_deleted: false,
			createdAt: '2023-04-04 00:00:00',
      		updatedAt: '2023-04-04 00:00:00'
		},
		{
			id: 9,
			wa_name: '경기',
			wa_long_name: '경기도',
			wa_logo: '/images/wide_areas/9-경기도.png',
			country_id: 1,
			country_wa_term: '도',
			bigo: '',
			user_mod: 1,
			is_deleted: false,
			createdAt: '2023-04-04 00:00:00',
      		updatedAt: '2023-04-04 00:00:00'
		},
		{
			id: 10,
			wa_name: '강원',
			wa_long_name: '강원도',
			wa_logo: '/images/wide_areas/10-강원도.png',
			country_id: 1,
			country_wa_term: '도',
			bigo: '',
			user_mod: 1,
			is_deleted: false,
			createdAt: '2023-04-04 00:00:00',
      		updatedAt: '2023-04-04 00:00:00'
		},
		{
			id: 11,
			wa_name: '충북',
			wa_long_name: '충청북도',
			wa_logo: '/images/wide_areas/11-충청북도.png',
			country_id: 1,
			country_wa_term: '도',
			bigo: '',
			user_mod: 1,
			is_deleted: false,
			createdAt: '2023-04-04 00:00:00',
      		updatedAt: '2023-04-04 00:00:00'
		},
		{
			id: 12,
			wa_name: '충남',
			wa_long_name: '충렁남도',
			wa_logo: '/images/wide_areas/12-충렁남도.png',
			country_id: 1,
			country_wa_term: '도',
			bigo: '',
			user_mod: 1,
			is_deleted: false,
			createdAt: '2023-04-04 00:00:00',
      		updatedAt: '2023-04-04 00:00:00'
		},
		{
			id: 13,
			wa_name: '전북',
			wa_long_name: '전라북도',
			wa_logo: '/images/wide_areas/13-전라북도.png',
			country_id: 1,
			country_wa_term: '도',
			bigo: '',
			user_mod: 1,
			is_deleted: false,
			createdAt: '2023-04-04 00:00:00',
      		updatedAt: '2023-04-04 00:00:00'
		},
		{
			id: 14,
			wa_name: '전남',
			wa_long_name: '전라남도',
			wa_logo: '/images/wide_areas/14-전라남도.png',
			country_id: 1,
			country_wa_term: '도',
			bigo: '',
			user_mod: 1,
			is_deleted: false,
			createdAt: '2023-04-04 00:00:00',
      		updatedAt: '2023-04-04 00:00:00'
		},
		{
			id: 15,
			wa_name: '경북',
			wa_long_name: '경상북도',
			wa_logo: '/images/wide_areas/15-경상북도.png',
			country_id: 1,
			country_wa_term: '도',
			bigo: '',
			user_mod: 1,
			is_deleted: false,
			createdAt: '2023-04-04 00:00:00',
      		updatedAt: '2023-04-04 00:00:00'
		},
		{
			id: 16,
			wa_name: '경남',
			wa_long_name: '경상남도',
			wa_logo: '/images/wide_areas/16-경상남도.png',
			country_id: 1,
			country_wa_term: '도',
			bigo: '',
			user_mod: 1,
			is_deleted: false,
			createdAt: '2023-04-04 00:00:00',
      		updatedAt: '2023-04-04 00:00:00'
		},
		{
			id: 17,
			wa_name: '제주',
			wa_long_name: '제주특별자치도',
			wa_logo: '/images/wide_areas/17-제주특별자치도.png',
			country_id: 1,
			country_wa_term: '별자치도',
			bigo: '',
			user_mod: 1,
			is_deleted: false,
			createdAt: '2023-04-04 00:00:00',
      		updatedAt: '2023-04-04 00:00:00'
		}
		], {});

	},

	async down (queryInterface, Sequelize) {
		await queryInterface.bulkDelete('Wide_Areas', null, {});
	}
};
