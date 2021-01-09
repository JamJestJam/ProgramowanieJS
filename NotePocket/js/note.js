class Note{
    constructor(title, context, color, pin, bold, italic, underline, date = new Date()) {
        this.title = title;
        this.context = context;
        this.color = color;
        this.pinned = pin;
        this.bold = bold;
        this.italic = italic;
        this.underline = underline;
        this.createDate = date;
    }
}

export {Note};