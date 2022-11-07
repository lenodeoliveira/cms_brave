# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [2.9.1](https://github.com/mokkapps/changelog-generator-demo/compare/v2.9.0...v2.9.1) (2022-11-07)


### Features

* add new types of images ([f9b5753](https://github.com/mokkapps/changelog-generator-demo/commits/f9b5753270eee0088cde79cc10ad90ae1888205c))


### Bug Fixes

* content return fix via admin panel, and mysql image fix ([bb1d080](https://github.com/mokkapps/changelog-generator-demo/commits/bb1d0804279821c41a222a153c107d0f42e149c4))

## [2.9.0](https://github.com/mokkapps/changelog-generator-demo/compare/v2.8.0...v2.9.0) (2022-10-31)


### Features

* ensure to throw an exception if LoadContentByAdmin throws a ([bb9ba27](https://github.com/mokkapps/changelog-generator-demo/commits/bb9ba279caa95ec4e8e884c6ed9838adacc1b5b7))
* ensures that it is possible to find content ([58f78eb](https://github.com/mokkapps/changelog-generator-demo/commits/58f78eb3f2c4b8c08493720222891cd5f6ad96b8))
* ensures the correct value is passed to LoadContentByAdmin ([5b2832c](https://github.com/mokkapps/changelog-generator-demo/commits/5b2832c15c58e21f6db05fe0fac490cfcb2f03c4))
* finalize API to return content ([8855c91](https://github.com/mokkapps/changelog-generator-demo/commits/8855c91fcc163bfefe44084b06199a4a35bf5bd1))
* make sure it returns 204 if there is no content ([c6736ae](https://github.com/mokkapps/changelog-generator-demo/commits/c6736aeef5436f15f964ce41678baa864e262bc6))
* make sure the value passed to LoadContentByAdminRepository is correct ([ff852aa](https://github.com/mokkapps/changelog-generator-demo/commits/ff852aa65fc63a7ebfb9bd3f2b6c7c4be85ec599))

## [2.8.0](https://github.com/mokkapps/changelog-generator-demo/compare/v2.7.0...v2.8.0) (2022-10-28)


### Features

* adding documentation for content retrieval API for admins ([946e575](https://github.com/mokkapps/changelog-generator-demo/commits/946e575d29a1776c2b2b022296c0d577b865f911))
* ends content recovery endpoint as administrator ([65762f0](https://github.com/mokkapps/changelog-generator-demo/commits/65762f0b65e29aa9d640e33284a6b4df06a4f5bc))
* ensures that data is returned successfully ([d58a8e1](https://github.com/mokkapps/changelog-generator-demo/commits/d58a8e1b0db3d0a5f15b7da4826d4bd38dba7ff0))
* ensures that if LoadContentsByAdmin throws an error, the error will be handled ([75bbdc5](https://github.com/mokkapps/changelog-generator-demo/commits/75bbdc575721fbe14488f16c3c1e49b9a7facf56))
* ensures that LoadContentsByAdmin receives the correct values ([1879258](https://github.com/mokkapps/changelog-generator-demo/commits/18792588eb1af3ccce51bc4a54daa0fcda514454))
* ensures that LoadContentsByAdminRepository returns the content ([d5e5686](https://github.com/mokkapps/changelog-generator-demo/commits/d5e568698bcb0c7d0976b2c3463b08d9864d245d))
* ensures that the status code is sent 204 if there is no content ([29d7840](https://github.com/mokkapps/changelog-generator-demo/commits/29d78401f1bdff8caf3246d120d5b1c24bb3f316))
* ensures the values passed to LoadContentsByAdminRepository are correct ([dfe2be3](https://github.com/mokkapps/changelog-generator-demo/commits/dfe2be3f750489a7c35df5f0c87defa68605b8fb))

## [2.7.0](https://github.com/mokkapps/changelog-generator-demo/compare/v2.6.0...v2.7.0) (2022-10-27)


### Features

* add Validation in UpdateContentController ([95c6d3c](https://github.com/mokkapps/changelog-generator-demo/commits/95c6d3c1191a3e05569d6de9ba88dee3cf4353c0))
* ensure Validation returns an error ([45a051d](https://github.com/mokkapps/changelog-generator-demo/commits/45a051d5cb12774814b6e61324aaae956a69c5f9))
* inject a Validation class into UpdateContentController ([5ca517e](https://github.com/mokkapps/changelog-generator-demo/commits/5ca517e8a47a6683da2482e9c00d30f46e804580))

## [2.6.0](https://github.com/mokkapps/changelog-generator-demo/compare/v2.5.0...v2.6.0) (2022-10-27)


### Features

* add error classes ([0826407](https://github.com/mokkapps/changelog-generator-demo/commits/0826407cd35e51cd4d129689390b049831c0b98c))
* adding more parameters to ResetPassword ([73cd234](https://github.com/mokkapps/changelog-generator-demo/commits/73cd234e4e6a011b177b8f1384e978dc08de650a))
* ensure if it is possible to reset the password ([0b6fe17](https://github.com/mokkapps/changelog-generator-demo/commits/0b6fe174adcb0fe5d55d28984fe2e67998f107e7))
* ensure it returns 403 if the token is invalid ([646a3bc](https://github.com/mokkapps/changelog-generator-demo/commits/646a3bc5e6cbe476e259f50f8066ba3b614681eb))
* ensure it throws an error if ResetPasswordRepository throws one ([986aaa7](https://github.com/mokkapps/changelog-generator-demo/commits/986aaa7afabe15e7476279e44c91ced9cee2249c))
* ensure that 403 refunds in case the token is expiring ([2d73deb](https://github.com/mokkapps/changelog-generator-demo/commits/2d73debfa95e7a986b4ac0854c4693100ea224d6))
* ensure that it is possible to reset the password ([8b98d31](https://github.com/mokkapps/changelog-generator-demo/commits/8b98d314f02ee86c70d00e44e159f1c57716a102))
* ensure values are passed correctly to ResetPasswordRepository ([29d862d](https://github.com/mokkapps/changelog-generator-demo/commits/29d862de537cd998d667941a706c9ea7e4e200f8))
* ensures it throws an error if Validation finds a ([98024f2](https://github.com/mokkapps/changelog-generator-demo/commits/98024f22e6ef823968c13545c2a61bbe4f9f2e3f))
* ensures that an error is thrown if Hasher throws a ([2be0dba](https://github.com/mokkapps/changelog-generator-demo/commits/2be0dbaef5dc0d1b80d121f9b055b2b4f00c676b))
* ensures that the correct value for ResetPassword is passed ([0550fd4](https://github.com/mokkapps/changelog-generator-demo/commits/0550fd4c4a59013e0787cb3640b928367cf2de65))
* ensures that the return is 403 if the user does not exist ([dac8d18](https://github.com/mokkapps/changelog-generator-demo/commits/dac8d1864f6d9202a7dd8a89f9e1030bd5a9991f))
* remove debug ([859110c](https://github.com/mokkapps/changelog-generator-demo/commits/859110c7e7cf2e57d4d9c07ccf9c747a2405b332))
* terminate endpoint to reset password ([d2dc4e6](https://github.com/mokkapps/changelog-generator-demo/commits/d2dc4e6a7e8194928285ffcf06df86d84ea88e74))

## [2.5.0](https://github.com/mokkapps/changelog-generator-demo/compare/v2.4.0...v2.5.0) (2022-10-26)

* add endpoint documentation to reset a user password
* add forget password endpoint
## [2.4.0](https://github.com/mokkapps/changelog-generator-demo/compare/v2.3.0...v2.4.0) (2022-10-26)


### Features

* add mailProvider in ForgotPassword ([638dfa7](https://github.com/mokkapps/changelog-generator-demo/commits/638dfa77144003d030a4c13e493e1e70bf735a60))
* ensure that CheckAccountByEmailRepository returns true if a user exists ([90e8515](https://github.com/mokkapps/changelog-generator-demo/commits/90e85154dd055bd6c3edc233723e7519c914c756))
* ensures ForgotPassword is called with correct values ([8481649](https://github.com/mokkapps/changelog-generator-demo/commits/8481649e37ad4a64376ab490fd4a9ca8e0ebd4cf))
* ensures that CheckEmailRepository is called with the correct value ([dc88e25](https://github.com/mokkapps/changelog-generator-demo/commits/dc88e251bccf49b2273007a52ef4e3e7dca7d69c))
* ensures that ForgotPasswordRepository is called with the correct values ([db33a2a](https://github.com/mokkapps/changelog-generator-demo/commits/db33a2abb8215bca25ccaab4281c26dae3b87f81))
* ensures that status code 204 is possible to forget password ([6a76f7f](https://github.com/mokkapps/changelog-generator-demo/commits/6a76f7fde28e0d3ccd2d904d1d6d2a1ca7bff4e5))
* ensures that the refund status code 400 if the user does not exist ([81822c1](https://github.com/mokkapps/changelog-generator-demo/commits/81822c107a9ebde3e58ee7cb58900ddd62af0c98))
* ensures Validation is called with correct values ([bb23fa7](https://github.com/mokkapps/changelog-generator-demo/commits/bb23fa75eca5680bb296a25f5cb2850b465aa1ea))
* ensures Validation returns 400 if email is not passed ([8d68c32](https://github.com/mokkapps/changelog-generator-demo/commits/8d68c325484be62b5d8ec8437cbd105b719f6e6a))
* finalizes changes to the password recovery endpoint ([56b4312](https://github.com/mokkapps/changelog-generator-demo/commits/56b4312fba69b8cea958806f17d386b24d00afc0))
* make sure ForgotPasswordRepository throws an exception if it occurs ([73ee9f9](https://github.com/mokkapps/changelog-generator-demo/commits/73ee9f9519005a8923b46021eba26d4e27b40a9e))
* update email sent to user ([71840aa](https://github.com/mokkapps/changelog-generator-demo/commits/71840aad792cdf47954dc6a8dc2ec1c2017e703e))

## [2.3.0](https://github.com/mokkapps/changelog-generator-demo/compare/v2.1.0...v2.3.0) (2022-10-24)


### Features

* ensure to return 204 if RetrieveUserByAdmin returns null ([c5cdc87](https://github.com/mokkapps/changelog-generator-demo/commits/c5cdc876122e0e5f9a0b0003a3a20c4ae800e359))
* ensures a user is returned ([1518a5b](https://github.com/mokkapps/changelog-generator-demo/commits/1518a5bfea8dff23b804628bee315812c776d27f))
* ensures that the correct value is passed to RetrieveUserByAdmin ([ec62eaa](https://github.com/mokkapps/changelog-generator-demo/commits/ec62eaa65462d792667790c1be31dacaf18b60cf))
* make sure a user is returned successfully ([0aba129](https://github.com/mokkapps/changelog-generator-demo/commits/0aba129aa24d2a603b9d685dd15ef4839b8ae92d))
* make sure it returns status code 500 if RetrieveUserByAdmin throws an error ([b08b92a](https://github.com/mokkapps/changelog-generator-demo/commits/b08b92aa175daaadf3d01c71012f2e88f1b05f9a))
* make sure you pass the correct value for RetrieveUserByAdminRepository ([0decfcd](https://github.com/mokkapps/changelog-generator-demo/commits/0decfcdd9eae5925d0f8209f10d11fae7f6be5ab))
* terminate user search endpoint by id ([fcdf5f5](https://github.com/mokkapps/changelog-generator-demo/commits/fcdf5f547117d7ad173449173ee79441f7a80a85))


### Bug Fixes

* down grade a versão para 2.1.0 ([1b3c1d1](https://github.com/mokkapps/changelog-generator-demo/commits/1b3c1d1a498582fb2fbb44091520f2ea016fe502))
* downgrade version to 2.1.0 ([b1cd332](https://github.com/mokkapps/changelog-generator-demo/commits/b1cd332a62426046aa69602258faaaa98fea49b9))
* fixes slug and content pagination bug ([f7e1b67](https://github.com/mokkapps/changelog-generator-demo/commits/f7e1b671c5c694d49ab2bc57917d2e0ff86771fa))

## [2.1.0](https://github.com/mokkapps/changelog-generator-demo/compare/v2.0.0...v2.1.0) (2022-10-21)


### Features

* endpoint for user recovery is complete ([5b30154](https://github.com/mokkapps/changelog-generator-demo/commits/5b30154842f94bc6ee33fe3c2240efc28174a15b))
* ensure correct values are passed to DbFindUsersByAdmin ([af3a64c](https://github.com/mokkapps/changelog-generator-demo/commits/af3a64c838c86123942d1d1788c33d17c3d2d91d))
* ensure throw an exception with status code 500 in case FindUserByAdmin throws an exception ([22a74dc](https://github.com/mokkapps/changelog-generator-demo/commits/22a74dcd61ae9088dd25d65c57f79a25cae4fb5b))
* ensure to retrieve 204 if there is no user in the base ([d5f9865](https://github.com/mokkapps/changelog-generator-demo/commits/d5f9865e447d6cc4a442f532861c44fb547ee51e))
* ensures that FindUserByAdmin retrieves the correct values ([d17fe10](https://github.com/mokkapps/changelog-generator-demo/commits/d17fe1018cfe08fa708f2cd881ef67ec138c39f3))
* ensures that user recovery ([b7d5c8b](https://github.com/mokkapps/changelog-generator-demo/commits/b7d5c8b398fd1e8a8f71723677f33a4f45b11745))

## [2.0.0](https://github.com/mokkapps/changelog-generator-demo/compare/v1.11.1...v2.0.0) (2022-10-20)


### Features

* add controller to a user's registrar route via admin ([9b64df5](https://github.com/mokkapps/changelog-generator-demo/commits/9b64df597a13862b9b04a60ce349fd71f508a817))
* add interface mail provider ([95cd9ef](https://github.com/mokkapps/changelog-generator-demo/commits/95cd9ef1e46380776b623f4b9cd5b5717af65943))
* ensure return status code 404 if user does not exist ([bc222f3](https://github.com/mokkapps/changelog-generator-demo/commits/bc222f33400b161689d937f00d736d7245e6268b))
* ensure that if UpdateUserByAdminRepository throws an exception that it will be thrown ([be4b106](https://github.com/mokkapps/changelog-generator-demo/commits/be4b1060be3650e27bee4da515324ae9f18cb198))
* ensures a user is returned ([a8cb45e](https://github.com/mokkapps/changelog-generator-demo/commits/a8cb45ec9da1cfacab4609c6af4d806a7146929c))
* ensures that an exception is thrown if UpdateUserByAdmin throws a ([7d6af78](https://github.com/mokkapps/changelog-generator-demo/commits/7d6af78e6248539a292912a34277d96fe7e11f9e))
* ensures that an exception is thrown LoadAccountByByIdRepository throws a ([4e8be80](https://github.com/mokkapps/changelog-generator-demo/commits/4e8be805b8302a8308a049f5cac735aaebd438a1))
* ensures that it is possible to successfully register a user ([8fbf975](https://github.com/mokkapps/changelog-generator-demo/commits/8fbf97503ca6293e6061de72cd3a815ef93bc466))
* ensures that it is possible to update a user successfully ([5bb74f0](https://github.com/mokkapps/changelog-generator-demo/commits/5bb74f0479d63d11202fe345de68fb502fc577fa))
* ensures that the correct value is passed to CheckAccountByEmailRepository ([51e4c5f](https://github.com/mokkapps/changelog-generator-demo/commits/51e4c5f7fd5ee3c36fee55dc17f2582d4e7c535c))
* ensures that the correct values are passed to RegisterUserByAdminRepository ([224fce7](https://github.com/mokkapps/changelog-generator-demo/commits/224fce7db82dfe02f2e84b86655b0076bfb1f9e6))
* ensures that the values passed to send the email are correct ([a50b4cf](https://github.com/mokkapps/changelog-generator-demo/commits/a50b4cf77a802be712d3c0cce22f18200064bf63))
* ensures that UpdateUserByAdmin will receive the correct data ([5da1366](https://github.com/mokkapps/changelog-generator-demo/commits/5da13665e49d4cec470d59b0fc60a2d50f7ae49d))
* ensures validation to update a user is successful ([61aad71](https://github.com/mokkapps/changelog-generator-demo/commits/61aad71cc813c0dc22cb6190adfad7ba1fdb24ea))
* ensures values are passed correctly to UpdateUser By Admin Repository ([c0cb65d](https://github.com/mokkapps/changelog-generator-demo/commits/c0cb65db5896ba4ce3e9c41170bec42ce77be260))
* finalizing endpoint for user registration via admin panel ([96aedd3](https://github.com/mokkapps/changelog-generator-demo/commits/96aedd3c38696e2b4b62951bdf8266aa18eaff26))
* finish endpoint to update user ([ff112e6](https://github.com/mokkapps/changelog-generator-demo/commits/ff112e63d10ace53d0bc7228c77d103de6074f1a))
* terminate use case class for user registrar via admin panel ([4fb97fb](https://github.com/mokkapps/changelog-generator-demo/commits/4fb97fb589dba5b29a2cc68d9e9fe865d821674d))

### [1.11.1](https://github.com/mokkapps/changelog-generator-demo/compare/v1.11.0...v1.11.1) (2022-10-18)


### Bug Fixes

* refactor: adding status functionality for users
* refactor add status in user
* refactor move use cases from account to folder
* fix version package ([c2ac0fc](https://github.com/mokkapps/changelog-generator-demo/commits/c2ac0fc14b7f1b5ce5bbfef9624408241c01e19f))

## [1.11.0](https://github.com/mokkapps/changelog-generator-demo/compare/v1.10.0...v1.11.0) (2022-10-18)


### Features
* chore add slugfy ([3db074f](https://github.com/mokkapps/changelog-generator-demo/commits/14113139a185d6af2ac20b3d1def5b267ee9ce69))
* docs finalization of documentation of new apis
* docs adding documentation for content pagination
* add exclude repo ([1411313](https://github.com/mokkapps/changelog-generator-demo/commits/14113139a185d6af2ac20b3d1def5b267ee9ce69))
* exclude ci ([92dc2c1](https://github.com/mokkapps/changelog-generator-demo/commits/92dc2c1c3071489969eb77918732e044985c8d0f))

## [1.10.0](https://github.com/mokkapps/changelog-generator-demo/compare/v1.9.0...v1.10.0) (2022-10-17)


### Features

* adding slug and id validation for content update ([cd13674](https://github.com/mokkapps/changelog-generator-demo/commits/cd136743f482546ebc5a1c3a3093ae7eac5ffa01))
* ensure return 204 if content can be deleted ([d8a33a3](https://github.com/mokkapps/changelog-generator-demo/commits/d8a33a3337b0e993c734ad9413b17cf089bad28f))
* ensure that the value passed to DbContent is correct ([90140e9](https://github.com/mokkapps/changelog-generator-demo/commits/90140e9da853af30d430d260cfdc11b254aed915))
* ensures that content can be updated ([0ef7b61](https://github.com/mokkapps/changelog-generator-demo/commits/0ef7b6109fabccc3d446e9964d5159e7d7f46e5b))
* ensures that the correct value is passed to UpdateContent ([41da3fc](https://github.com/mokkapps/changelog-generator-demo/commits/41da3fc4907aa1f943fa1ca1f563b3eb0a48c9ae))
* make sure UpdateContentController return 500 if UpdateContent is throws ([553a8b4](https://github.com/mokkapps/changelog-generator-demo/commits/553a8b46d20836803a115fe350b3177a4af2061b))
* make sure UpdateContentController returns 404 if there is no content to update ([508cd9a](https://github.com/mokkapps/changelog-generator-demo/commits/508cd9a0bcbcd11669eacc955db317de34836c40))


### Bug Fixes

* fix for passing content data for update ([b2102c2](https://github.com/mokkapps/changelog-generator-demo/commits/b2102c23251546fa948af75f28e28cf4212ac2de))

## [1.9.0](https://github.com/mokkapps/changelog-generator-demo/compare/v1.8.0...v1.9.0) (2022-10-13)


### Features

* add protocol to remove content ([61ab29a](https://github.com/mokkapps/changelog-generator-demo/commits/61ab29af4d712b93682ff16289edfa6fb9c3fa2f))
* add use case to domain to exclude content ([21f5bde](https://github.com/mokkapps/changelog-generator-demo/commits/21f5bde00f07be3dfc61b1027590c771492bb539))
* ensures it returns 204 if the content is deleted ([594ffdd](https://github.com/mokkapps/changelog-generator-demo/commits/594ffdd3d141803354247fb62dc215569c41b6ce))
* ensures value is passed correctly to RemoveContent ([ce76e1e](https://github.com/mokkapps/changelog-generator-demo/commits/ce76e1e29b3208b042f6a7dbf761e73fa7e90882))
* make sure RemoveContentRepository has received the correct values ([37f71a9](https://github.com/mokkapps/changelog-generator-demo/commits/37f71a90af6c5a9bf88aa204418bbde5c04bef90))
* route for removal of content by authorized user ([c433f84](https://github.com/mokkapps/changelog-generator-demo/commits/c433f847a250e121de60e7d954a12de3e6aeb0ec))

## [1.8.0](https://github.com/mokkapps/changelog-generator-demo/compare/v1.7.0...v1.8.0) (2022-10-10)


### Features

*  add LoadContentRepository ([4271b4f](https://github.com/mokkapps/changelog-generator-demo/commits/4271b4f1474dd9c8b93f574b9cfa0f63332ce67e))
* add endpoint to fetch content by slug ([4b43db3](https://github.com/mokkapps/changelog-generator-demo/commits/4b43db306536b7c7849f44779420c7c9b3e02571))
* ensure that LoadContent must receive the correct value ([1584fd7](https://github.com/mokkapps/changelog-generator-demo/commits/1584fd71185310a902a34e4973cfae6ae44ade5d))
* ensure that LoadContent must receive the correct value ([1bc98eb](https://github.com/mokkapps/changelog-generator-demo/commits/1bc98ebba21b7e0be2ab693821582ec7346c45dd))
* ensure that when passing a slug it will return a content ([dbd32ba](https://github.com/mokkapps/changelog-generator-demo/commits/dbd32ba4af7b5aff54b792ae64d65488a11a2a78))

## [1.7.0](https://github.com/mokkapps/changelog-generator-demo/compare/v1.6.0...v1.7.0) (2022-10-07)


### Features

* finalizing the slug validation use case ([f3aeb38](https://github.com/mokkapps/changelog-generator-demo/commits/f3aeb38600c47244b669e31d45161128a9547b53))

## [1.6.0](https://github.com/mokkapps/changelog-generator-demo/compare/v1.5.1...v1.6.0) (2022-10-06)


### Features

* add return endpoint of all content with pagination ([4f6068f](https://github.com/mokkapps/changelog-generator-demo/commits/4f6068f588688a5b0edc357edc22cbf2374bb73f))


### Bug Fixes

* fix setup multer ([eb6d90a](https://github.com/mokkapps/changelog-generator-demo/commits/eb6d90a65280c057be6b7ec80b70119fcf745351))

### [1.5.2](https://github.com/mokkapps/changelog-generator-demo/compare/v1.5.1...v1.5.2) (2022-10-05)


### Bug Fixes

* fix setup multer ([eb6d90a](https://github.com/mokkapps/changelog-generator-demo/commits/eb6d90a65280c057be6b7ec80b70119fcf745351))

### [1.5.1](https://github.com/mokkapps/changelog-generator-demo/compare/v1.5.0...v1.5.1) (2022-10-04)


### Features

* add sql scripts to dashboard ([8228ec5](https://github.com/mokkapps/changelog-generator-demo/commits/8228ec5bef96d9bb4c8fb4d3cf3393cdc7ff388d))


### Bug Fixes

* fix database creation script ([7789985](https://github.com/mokkapps/changelog-generator-demo/commits/778998541e231ec5013f6c5e9ebd17dbe894c09e))

## [1.5.0](https://github.com/mokkapps/changelog-generator-demo/compare/v1.4.0...v1.5.0) (2022-10-04)


### Features

* add image upload and image removal ([c651d07](https://github.com/mokkapps/changelog-generator-demo/commits/c651d0794a164f19b8245853993b2050caf7cc18))

## [1.4.0](https://github.com/mokkapps/changelog-generator-demo/compare/v1.3.0...v1.4.0) (2022-10-03)


### Features

* add route to serve static files ([4a550e6](https://github.com/mokkapps/changelog-generator-demo/commits/4a550e61e7dd8aa431f45bb67b45fb305cafe55f))


### Bug Fixes

* fix documentation ([d5ba4be](https://github.com/mokkapps/changelog-generator-demo/commits/d5ba4be8f3512b3421ab69dc00dd6599061a7330))

## [1.3.0](https://github.com/mokkapps/changelog-generator-demo/compare/v1.2.0...v1.3.0) (2022-09-30)
* docs: update readme 
* docs: update changelog 
* docs: add documentation to return only one content
* docs: add documentation to update content
* docs: add contents API docs
## [1.2.0](https://github.com/mokkapps/changelog-generator-demo/compare/v1.1.0...v1.2.0) (2022-09-30)


### Features

* add admin permission on create content route ([1ed0740](https://github.com/mokkapps/changelog-generator-demo/commits/1ed0740dc1746bab8d4963ed29c6831057e31627))
* add auth middleware in content route ([f03496b](https://github.com/mokkapps/changelog-generator-demo/commits/f03496be4027575f721bddcddb359d29362123eb))

## [1.1.0](https://github.com/mokkapps/changelog-generator-demo/compare/v1.0.1...v1.1.0) (2022-09-28)


### Features

* add middleware interface ([19dc510](https://github.com/mokkapps/changelog-generator-demo/commits/19dc510958484b9ff18f8d7c094478bc609ae756))
* create connection class for mysql ([c546d33](https://github.com/mokkapps/changelog-generator-demo/commits/c546d333b2b1e51d92997f429ccf03302b5c8f67))
* ensure AddContentController calls AddContent with correct values ([e3a6893](https://github.com/mokkapps/changelog-generator-demo/commits/e3a689346aea159727a659b3e0595043312e378b))
* ensure AddContentController calls Validation with correct values ([922ec4c](https://github.com/mokkapps/changelog-generator-demo/commits/922ec4c03e8ba692c27885142fdb8299c9322055))
* ensure AddContentController returns 204 on success ([1ce26a3](https://github.com/mokkapps/changelog-generator-demo/commits/1ce26a31db83d738e033b10d28079c9d35f7d5e0))
* ensure AddContentController returns 500 if AddContentUseCase throws ([ade17b9](https://github.com/mokkapps/changelog-generator-demo/commits/ade17b929882fafdd27508b834adeb841a6300ea))
* ensure AddContentController returns a badRequest error if Validation fails ([8bdbb54](https://github.com/mokkapps/changelog-generator-demo/commits/8bdbb54bf1bc49da70722e9b60c233ced4017dd7))
* ensure AuthMiddleware returns 403 if no headers are found ([4d7247f](https://github.com/mokkapps/changelog-generator-demo/commits/4d7247f4b59534fbcc7bcb73fed9d288c6376775))
* ensure DbAddContent calls AddContentRepository with correct values ([c62fcc3](https://github.com/mokkapps/changelog-generator-demo/commits/c62fcc378ffc8ef86abad2f046a200e868fbf68d))
* making the composition for the route of registering content ([5255319](https://github.com/mokkapps/changelog-generator-demo/commits/5255319c8c4a3ef49949d9f419a1f081597c1d26))


### Bug Fixes

* fix connection db ([622943e](https://github.com/mokkapps/changelog-generator-demo/commits/622943e25deb2dd2d794c31b6e21b77f0028bb35))

### [1.0.1](https://github.com/mokkapps/changelog-generator-demo/compare/v1.0.0...v1.0.1) (2022-09-27)


### Features

* add LoginFactory ([3c5a2ba](https://github.com/mokkapps/changelog-generator-demo/commits/3c5a2ba1f19af7e70e8e3cc3ef29db981a2b3449))
* add route login ([46421f5](https://github.com/mokkapps/changelog-generator-demo/commits/46421f51caf87858bb416e959ff59b035c655b34))
* add test to create error logs ([20de037](https://github.com/mokkapps/changelog-generator-demo/commits/20de0377ea0e20ae4d196ad7509b03683d08f958))
* ends login controller tests ([b010291](https://github.com/mokkapps/changelog-generator-demo/commits/b010291512bf07d72b927e7e2d3129d81d05c843))
* ensure an authentication class will be called with the correct values ([8875769](https://github.com/mokkapps/changelog-generator-demo/commits/88757698876c831a90fc39fa8790e90c4db2bb9b))
* ensure LogControlerDecorator calls LogErrorFile if controller returns a server error ([aa7d3d0](https://github.com/mokkapps/changelog-generator-demo/commits/aa7d3d01d0d601172c469289c7a52eb11190d6e8))
* ensure LogControllerDecorator calls controller with correct values ([6a94f0e](https://github.com/mokkapps/changelog-generator-demo/commits/6a94f0e6088d5d3b2f95903f53ec277fc488ebb2))
* make sure that if the credentials are not correct, throw a 401 error ([478852d](https://github.com/mokkapps/changelog-generator-demo/commits/478852d1cbe8bd5f5d646d5d3af68c64fa4d1789))


### Bug Fixes

* fix log test file ([7df9760](https://github.com/mokkapps/changelog-generator-demo/commits/7df9760ec67a494b88543cb0906d22b1ef91cbe1))
* log generator implementation fix ([958fed7](https://github.com/mokkapps/changelog-generator-demo/commits/958fed73f19f9a15db54ee964b90f34c28854222))

## 1.0.0 (2022-09-23)


### Features

* add account data layer ([81ee55b](https://github.com/mokkapps/changelog-generator-demo/commits/81ee55b39df9ce73858ee058732b5e04c55058cf))
* add editor config and configure husky ([4df2d56](https://github.com/mokkapps/changelog-generator-demo/commits/4df2d56bc06795eff56e2a37dc017d0edb2957a8))
* add script for database initialization ([d1679dd](https://github.com/mokkapps/changelog-generator-demo/commits/d1679dd5d5063afdcfa274e4ce67b94069469349))
* add sequelize ([0d3682b](https://github.com/mokkapps/changelog-generator-demo/commits/0d3682bb193c3c3f8d9ed40855b6ede41bbd9a9e))
* add signup route ([ad2182f](https://github.com/mokkapps/changelog-generator-demo/commits/ad2182fcdcf6dca61828a6030f494b50ab7e0332))
* add Swagger API ([76d6f69](https://github.com/mokkapps/changelog-generator-demo/commits/76d6f6942d622e8cb03d918a6fb381f52b8ae648))
* add types paths ([7ea5989](https://github.com/mokkapps/changelog-generator-demo/commits/7ea5989c2e7e6746d28a41580735dff239691775))
* add user in database ([eea68a7](https://github.com/mokkapps/changelog-generator-demo/commits/eea68a701ceb550153ba39834903560a3c7bc4bc))
* add validation ([3ed9d04](https://github.com/mokkapps/changelog-generator-demo/commits/3ed9d04c68ae568ac986edad58c26a6ce4500a77))
* apply no-cache middleware on Swagger API ([c701f13](https://github.com/mokkapps/changelog-generator-demo/commits/c701f13122c735799339569693b2c85090a24a37))
* check that the values passed to Authentication are correct ([19e5cd1](https://github.com/mokkapps/changelog-generator-demo/commits/19e5cd1b20b74d861fa787760425ccbd8c4aa241))
* create table the content ([d5606e1](https://github.com/mokkapps/changelog-generator-demo/commits/d5606e18843e443d79490eae0bee760cadbb58a4))
* ends EmailValidatorAdapter test ([90ed99e](https://github.com/mokkapps/changelog-generator-demo/commits/90ed99e4fa7bb1f46def947291656666a2ca1f0e))
* ensure 403 return if email is already in use ([b88f084](https://github.com/mokkapps/changelog-generator-demo/commits/b88f08409fefe72b9514790635d697fd1ec6d082))
* ensure cors is enable ([abef8a2](https://github.com/mokkapps/changelog-generator-demo/commits/abef8a207a93336b6bbee7067445a3a739a7bed6))
* ensure requests parse body as json ([3f8f2cc](https://github.com/mokkapps/changelog-generator-demo/commits/3f8f2cce2bfdd417d8c5b52256f734221da2b314))
* ensure requests return json as default content type ([f0d0a5e](https://github.com/mokkapps/changelog-generator-demo/commits/f0d0a5ed776a654c3e93b3d9231240e5c825ec0b))
* ensure returns 500 if an error is thrown in AddAccount ([5ddd3a6](https://github.com/mokkapps/changelog-generator-demo/commits/5ddd3a6fa127dbf24b495ae57974c65ad6dbe838))
* ensures values were passed to AddAccount ([8d105f7](https://github.com/mokkapps/changelog-generator-demo/commits/8d105f7e03c1ba67871257bd00b9afa8a17d6dd0))
* should return 500 in case any error is thrown by authentication ([eddd6c4](https://github.com/mokkapps/changelog-generator-demo/commits/eddd6c49af4d83deff71c2baea5bcf6bb5d02fc3))


### Bug Fixes

* .gitignore Fixed ([c05b09e](https://github.com/mokkapps/changelog-generator-demo/commits/c05b09ef57521a24c0edccc1d8f2d9bd13f5bb6b))
* .gitignore Fixed ([6eb6904](https://github.com/mokkapps/changelog-generator-demo/commits/6eb69043e8c6b88925449e848bb45b7f56124637))
* add data ([1b14ea2](https://github.com/mokkapps/changelog-generator-demo/commits/1b14ea2b155e553ffa46436df979a971ce0b20d6))
* fix .gitgnore ([9186b61](https://github.com/mokkapps/changelog-generator-demo/commits/9186b61f983ce6ca42a2e85f5c64bf6861cf8aa2))
* fix docker-compose ([089e798](https://github.com/mokkapps/changelog-generator-demo/commits/089e798795fadd4cb0b35cb5691ad8e7fbf91f9f))
* fix hotreload nodemon ([36c3e5a](https://github.com/mokkapps/changelog-generator-demo/commits/36c3e5aa0f89589b0cb2d49b704b62dc1bb6ca76))
* fix hotreload nodemon ([dfd63d3](https://github.com/mokkapps/changelog-generator-demo/commits/dfd63d36caafae43384d1c5548785bf01444ae72))
* fix query db ([caf9682](https://github.com/mokkapps/changelog-generator-demo/commits/caf968222a0a366e72e6a2c93aaa065820aad776))
* fixed test ([d955a37](https://github.com/mokkapps/changelog-generator-demo/commits/d955a37d129a0e332ff98dd2eed01405a46fb397))
* remove file test ([763410a](https://github.com/mokkapps/changelog-generator-demo/commits/763410a19e9d83d50a0b0ea7a4d5d3ad6c2878d1))
* remove function test in AccountMysqlRepository ([85521be](https://github.com/mokkapps/changelog-generator-demo/commits/85521be756f40fca0f85adebba75098c915c52b4))
* remove test file ([3336ecc](https://github.com/mokkapps/changelog-generator-demo/commits/3336eccffebd863a48d21c648f1dc313dc7f0485))
