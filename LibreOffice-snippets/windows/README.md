# Scripting in LibreOffice
### LibreOffice Version: 6.4.6.2 (x64) - Windows10
### Python scripting:
- add extension APSO 1.2.6.2 [from here](https://extensions.libreoffice.org/en/extensions/show/apso-alternative-script-organizer-for-python)
- run shipped HelloWorld.py from extension:
```batch
C:\Program Files\LibreOffice\program>soffice "vnd.sun.star.script:HelloWorld.py$HelloWorldPython?language=Python&location=share"
```
### Command explanation:
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

# vim: set shiftwidth=4 softtabstop=4 expandtab:
````
