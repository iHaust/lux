module.exports = {
  presets: [
  	"@vue/app",
  	[
  		"@babel/preset-env", 
  		{ 
  			loose: true,
  			useBuiltIns: false 		
  		}
  	]
  ],
  plugins: ["transform-vue-jsx"]
};
