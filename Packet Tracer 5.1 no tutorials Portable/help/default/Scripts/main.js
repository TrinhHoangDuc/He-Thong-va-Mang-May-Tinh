var TUTORIAL_STUB = true;

function openTutorial( file )
{
	if ( TUTORIAL_STUB )
	{
		location.href="tutorials_stub.htm";
	}
	else
	{
		if ( file.match('.swf') )
		{

			// handle the large movies
			if (       file.match('AWVarMan_') 
				|| file.match('AWAdvanced_') 
				|| file.match('AWBasics_') 
				|| file.match('Multiuser_') 
				|| file.match('ManagingWindowsInPT_') 
				|| file.match('IPC_')
			    )
			{
				window.open(file,"","toolbar=0,location=0,top=0,directories=0,status=0,menubar=0,scrollbars=0,resizeable=1,width=1024,height=768");
			}
			else
			{
				window.open(file,"","toolbar=0,location=0,top=0,directories=0,status=0,menubar=0,scrollbars=0,resizeable=1,width=821,height=666");
			}
		}
		else
		{
			location.href=file;
		}

	}
	
}