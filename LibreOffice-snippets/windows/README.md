# Scripting in LibreOffice
## LibreOffice Version: 6.4.6.2 (x64) - Windows10
### Python scripting - run as macro (should be faster than socket - see below):
- add extension APSO 1.2.6.2 [from here](https://extensions.libreoffice.org/en/extensions/show/apso-alternative-script-organizer-for-python)
- [APSO repo](https://gitlab.com/jmzambon/apso) - for additional info
- run shipped HelloWorld.py from extension:
```batch
C:\Program Files\LibreOffice\program>soffice "vnd.sun.star.script:HelloWorld.py$HelloWorldPython?language=Python&location=share"
```
#### Command explanation:
- "vnd.sun.star.script:<ins>***HelloWorld.py***$***HelloWorldPython***?language=Python&location=***share***"
- `HelloWorld.py` - "C:\Program Files\LibreOffice\\***share***\\Scripts\python\HelloWorld.py
- `HelloWorldPython` - name of main function from HelloWorld.py file, like:
```python
def HelloWorldPython( ):
    """Prints the string 'Hello World(in Python)' into the current document"""
#get the doc from the scripting context which is made available to all scripts
    desktop = XSCRIPTCONTEXT.getDesktop()
    model = desktop.getCurrentComponent()
#check whether there's already an opened document. Otherwise, create a new one
    if not hasattr(model, "Text"):
        model = desktop.loadComponentFromURL(
            "private:factory/swriter","_blank", 0, () )
#get the XText interface
    text = model.Text
#create an XTextRange at the end of the document
    tRange = text.End
#and set the string
    tRange.String = "Hello World (in Python)"
    print("hello there")
    return None
#vim: set shiftwidth=4 softtabstop=4 expandtab
```

#### Inspect output with APSO console:
- UI: LibreOffice app -> Tools -> Macros -> Organize python scripts -> Menu -> Python shell

### Python scripting - using socket:
- start calc with opened socket
```batch
"C:\\Program Files\LibreOffice\program\soffice.exe" --calc --accept="socket,host=localhost,port=2002;urp;StarOffice.ServiceManager"
```
- use python shipped with libreoffice (must support UNO)
```batch
"C:\\Program Files\LibreOffice\program\python.exe"
```
- let's test it:
```python
import uno

# get the uno component context from the PyUNO runtime
localContext = uno.getComponentContext()
# create the UnoUrlResolver
resolver = localContext.ServiceManager.createInstanceWithContext("com.sun.star.bridge.UnoUrlResolver", localContext )
# connect to the running office
ctx = resolver.resolve( "uno:socket,host=localhost,port=2002;urp;StarOffice.ComponentContext" )
smgr = ctx.ServiceManager
# get the central desktop object
desktop = smgr.createInstanceWithContext( "com.sun.star.frame.Desktop",ctx)
# access the current writer document
model = desktop.getCurrentComponent()
# access the active sheet
active_sheet = model.CurrentController.ActiveSheet
# access cell C4
cell1 = active_sheet.getCellRangeByName("C4")
# set text inside
cell1.String = "Hello world"
```

