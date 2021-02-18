function avoidFormResubmission(){
	window.history.replaceState({}, document.title, "${pageURLWithOutParameters}");
}