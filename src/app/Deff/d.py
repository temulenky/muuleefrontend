def math_func(a,b, operator):
    if(operator=='+'):
        return a + b
    elif(operator=='-'):
        return a - b
    elif(operator=='*'):
        return a * b
    elif(operator=='/'):
        if(b == 0):
            return "eror"
        return a / b
    elif(operator=='%'):
        if(b == 0):
            return "error"
        return a % b
#style
style = ttk.Style(root)
style.theme_use=("default")
style.configure("math.TButton", background = "black", foreground ="white", font=("helvetica", 12 , "bold"))
style.map("math.TButton", background=[("hover","black")])