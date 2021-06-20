<%--multiple을 사용할 경우 fileList를 반환하는데, 여기서 file, fileList를 수정 불가능--%>
<%--보안상의 이유로 사용자가 지정하지 않은 이상한 파일이 업로드 되게하는것을 방지하기 위함--%>

<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
	request.setCharacterEncoding("utf-8");
%>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js" integrity="sha512-bnIvzh6FU75ZKxp0GXLH9bewza/OIw6dLVh9ICg0gogclmYGguQJWl8U30WpbsGTqbIiAwxTsbe76DErLq5EDQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<style>
    .file-uploader {
        background-color: #dbefe9;
        border-radius: 3px;
        color: #242424;
    }
    .file-uploader__message-area {
        font-size: 18px;
        padding: 1em;
        text-align: center;
        color: #377a65;
    }
    .file-list {
        background-color: #fff;
        font-size: 16px;
    }
    .file-list__name {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .file-list li {
        height: 50px;
        line-height: 50px;
        margin-left: 0.5em;
        border: none;
        overflow: hidden;
    }
    .removal-button {
        width: 20%;
        border: none;
        background-color: #d65d38;
        color: white;
    }
    .removal-button::before {
        content: "X";
    }
    .removal-button:focus {
        outline: 0;
    }
    .file-chooser {
        padding: 1em;
        transition: background-color 1s, height 1s;
    }
    .file-chooser p {
        font-size: 18px;
        padding-top: 1em;
    }
    .file-uploader {
        max-width: 400px;
        height: auto;
        margin: 2em auto;
    }
    .file-uploader * {
        display: block;
    }
    .file-uploader input[type="submit"] {
        margin-top: 2em;
        float: right;
    }
    .file-list {
        margin: 0 auto;
        max-width: 90%;
    }
    .file-list__name {
        max-width: 70%;
        float: left;
    }
    .removal-button {
        display: inline-block;
        height: 100%;
        float: right;
    }
    .file-chooser {
        width: 90%;
        margin: 0.5em auto;
    }
    .file-chooser__input {
        margin: 0 auto;
    }
    .file-uploader__submit-button {
        width: 100%;
        border: none;
        font-size: 1.5em;
        padding: 1em;
        background-color: #72bfa7;
        color: white;
    }
    .file-uploader__submit-button:hover {
        background-color: #a7d7c8;
    }
    .file-list li:after, .file-uploader:after {
        content: "";
        display: table;
        clear: both;
    }
    .hidden {
        display: none;
    }
    .hidden input {
        display: none;
    }
    .error {
        background-color: #d65d38;
        color: white;
    }
    *, *::before, *::after {
        box-sizing: border-box;
    }
    ul, li {
        margin: 0;
        padding: 0;
    }

</style>

<form method="post" class="file-uploader" action="multipleAction.jsp" enctype="multipart/form-data">
	<div class="file-uploader__message-area">
		<p>업로드할 파일을 선택해주세요</p>
	</div>
	<div class="file-chooser">
		<input class="file-chooser__input" type="file">
	</div>

	<input class="file-uploader__submit-button" type="submit" value="Upload">
</form>

<script>
    (function ($) {
        $.fn.uploader = function (options) {
            var settings = $.extend(
                {
                    MessageAreaText: "선택된 파일이 없습니다.",
                    MessageAreaTextWithFiles: "파일 리스트:",
                    DefaultErrorMessage: "파일을 열수 없습니다.",
                    BadTypeErrorMessage: "지원하지 않는 파일 형식입니다.",
                    acceptedFileTypes: [
                        "pdf",
                        "jpg",
                        "gif",
                        "jpeg",
                        "bmp",
                        "tif",
                        "tiff",
                        "png",
                        "xps",
                        "doc",
                        "docx",
                        "fax",
                        "wmp",
                        "ico",
                        "txt",
                        "cs",
                        "rtf",
                        "xls",
                        "xlsx"
                    ]
                },
                options
            );

            var uploadId = 1;
            //update the messaging
            $(".file-uploader__message-area p").text(
                options.MessageAreaText || settings.MessageAreaText
            );

            //create and add the file list and the hidden input list
            var fileList = $('<ul class="file-list"></ul>');
            var hiddenInputs = $('<div class="hidden-inputs hidden"></div>');
            $(".file-uploader__message-area").after(fileList);
            $(".file-list").after(hiddenInputs);

            //when choosing a file, add the name to the list and copy the file input into the hidden inputs
            $(".file-chooser__input").on("change", function () {
                var files = document.querySelector(".file-chooser__input").files;

                for (var i = 0; i < files.length; i++) {
                    var file = files[i];
                    var fileName = file.name.match(/([^\\\/]+)$/)[0];

                    //clear any error condition
                    $(".file-chooser").removeClass("error");
                    $(".error-message").remove();

                    //validate the file
                    var check = checkFile(fileName);
                    if (check === "valid") {
                        // move the 'real' one to hidden list
                        $(".hidden-inputs").append($(".file-chooser__input"));

                        //insert a clone after the hiddens (copy the event handlers too)
                        $(".file-chooser").append(
                            $(".file-chooser__input").clone({ withDataAndEvents: true })
                        );

                        //add the name and a remove button to the file-list
                        $(".file-list").append(
                            '<li style="display: none;"><span class="file-list__name">' +
                            fileName +
                            '</span><button class="removal-button" data-uploadid="' +
                            uploadId +
                            '"></button></li>'
                        );
                        $(".file-list").find("li:last").show(800);

                        //removal button handler
                        $(".removal-button").on("click", function (e) {
                            e.preventDefault();

                            //remove the corresponding hidden input
                            $(
                                '.hidden-inputs input[data-uploadid="' +
                                $(this).data("uploadid") +
                                '"]'
                            ).remove();

                            //remove the name from file-list that corresponds to the button clicked
                            $(this)
                                .parent()
                                .hide("puff")
                                .delay(10)
                                .queue(function () {
                                    $(this).remove();
                                });

                            //if the list is now empty, change the text back
                            if ($(".file-list li").length === 0) {
                                $(".file-uploader__message-area").text(
                                    options.MessageAreaText || settings.MessageAreaText
                                );
                            }
                        });

                        //so the event handler works on the new "real" one
                        $(".hidden-inputs .file-chooser__input")
                            .removeClass("file-chooser__input")
                            .attr("data-uploadId", uploadId)
	                        .attr("name", "files");

                        //update the message area
                        $(".file-uploader__message-area").text(
                            options.MessageAreaTextWithFiles ||
                            settings.MessageAreaTextWithFiles
                        );

                        uploadId++;
                    } else {
                        //indicate that the file is not ok
                        $(".file-chooser").addClass("error");
                        var errorText =
                            options.DefaultErrorMessage || settings.DefaultErrorMessage;

                        if (check === "badFileName") {
                            errorText =
                                options.BadTypeErrorMessage || settings.BadTypeErrorMessage;
                        }

                        $(".file-chooser__input").after(
                            '<p class="error-message">' + errorText + "</p>"
                        );
                    }
                }
            });

            var checkFile = function (fileName) {
                var accepted = "invalid",
                    acceptedFileTypes =
                        this.acceptedFileTypes || settings.acceptedFileTypes,
                    regex;

                for (var i = 0; i < acceptedFileTypes.length; i++) {
                    regex = new RegExp("\\." + acceptedFileTypes[i] + "$", "i");

                    if (regex.test(fileName)) {
                        accepted = "valid";
                        break;
                    } else {
                        accepted = "badFileName";
                    }
                }

                return accepted;
            };
        };
    })($);

    //init
    $(document).ready(function () {
        console.log("hi");
        $(".fileUploader").uploader({
            MessageAreaText: "No files selected. Please select a file."
        });
    });

</script>