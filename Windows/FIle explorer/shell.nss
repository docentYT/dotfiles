settings
{
	priority=1
	exclude.where = !process.is_explorer
	showdelay = 200
	// Options to allow modification of system items
	modify.remove.duplicate=1
	
	tip
	{
		enabled=true
		opacity=100
		width=400
		radius=1
		time=1.25
		padding=[10,10]
	}

}

import 'imports/theme.nss'
import 'imports/images.nss'

import 'imports/modify.nss'

theme
{
	name="modern"
	background
	{
		// opacity=85
		// effect=1
	}
	image.align = 2 // 0 = checked, 1 = image, 2 = both
}

menu(mode="multiple" title="Pin/Unpin" image=icon.pin) {}
menu(mode="multiple" title=title.more_options image=icon.more_options) {}

import 'imports/terminal.nss'
// import 'imports/file-manage.nss'
// import 'imports/develop.nss'
// import 'imports/goto.nss'
import 'imports/taskbar.nss'
