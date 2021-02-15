using System;
using System.IO;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Ink;

namespace DrawScreen
{
    /// <summary>
    /// MainWindow.xaml에 대한 상호 작용 논리
    /// </summary>
    public partial class MainWindow : Window
    {
        private Point _lastMousePosition;
        private bool _isDraging = false;
        private Border _selectedColor;
        private string _staticInfo = "";
        private bool _displayingInfo;
        private bool _usingEraser;

        public MainWindow()
        {
            InitializeComponent();
            SelectColor(DefaultColor);
        }

        private async void Display(string info)
        {
            InfoBox.Text = info;
            _displayingInfo = true;
            await InfoDisplayTimeUp(new Progress<string>(box => InfoBox.Text = box));
        }

        private Task InfoDisplayTimeUp(IProgress<string> box)
        {
            return Task.Run(() =>
            {
                Task.Delay(2000).Wait();
                box.Report(_staticInfo);
                _displayingInfo = false;
            });
        }

        private void SetStaticInfo(string info) {
            _staticInfo = info;
            if (!_displayingInfo)
                InfoBox.Text = _staticInfo;
        }

        private void SelectColor(Border border)
        {
            var solidColorBrush = border.Background as SolidColorBrush;
            if (solidColorBrush == null) return;
            MainInkCanvas.DefaultDrawingAttributes.Color = solidColorBrush.Color;
            brushPreview.Background = border.Background;
            border.BorderThickness = new Thickness(2);
            if (_selectedColor != null)
                _selectedColor.BorderThickness = new Thickness(0);
            _selectedColor = border;

        }

        private static string GenerateFileName() {
            return DateTime.Now.ToString("yyyyMMdd-HHmmss") + ".icv";
        }

        private static string GetFileNameFromPath(string path)
        {
            return Path.GetFileName(path);
        }

        private static FileStream GetFileStream(string filename){
            if (!Directory.Exists("Save"))
                Directory.CreateDirectory("Save");
            return new FileStream("Save\\" + filename, FileMode.OpenOrCreate);
        }

        #region Controls
        private void ColorSelector_MouseDown(object sender, MouseEventArgs e)
        {
            var border = sender as Border;
            if (border == null) return;
            SelectColor(border);
        }

        private void Slider_ValueChanged(object sender, RoutedPropertyChangedEventArgs<double> e)
        {
            MainInkCanvas.DefaultDrawingAttributes.Height = e.NewValue;
            MainInkCanvas.DefaultDrawingAttributes.Width = e.NewValue;
            brushPreview.Height = e.NewValue;
            brushPreview.Width = e.NewValue;
        }
        #endregion
        private void CloseButton_MouseDown(object sender, MouseButtonEventArgs e)
        {
            Application.Current.Shutdown(0);
        }

        private void EraserButton_MouseDown(object sender, MouseButtonEventArgs e) {
            if (_usingEraser) {
                MainInkCanvas.EditingMode = InkCanvasEditingMode.Ink;
                EraserButton.Background = new SolidColorBrush(Color.FromArgb(0x4C, 0, 0, 0));
                _usingEraser = false;
                SetStaticInfo("");
            } else {
                MainInkCanvas.EditingMode = InkCanvasEditingMode.EraseByStroke;
                EraserButton.Background = new SolidColorBrush(Color.FromArgb(80, 255, 255, 255));
                _usingEraser = true;
                SetStaticInfo("Eraser Mode");
            }

        }

        private void UndoButton_MouseDown(object sender, MouseButtonEventArgs e)
        {
            Display("Function Unfinished");
        }

        private void SaveButton_MouseDown(object sender, MouseButtonEventArgs e) {
            var fn = "Test.icv";
            using (var s = GetFileStream(fn))
                MainInkCanvas.Strokes.Save(s);
            Display("Save to " + fn);
        }

        private void LoadButton_MouseDown(object sender, MouseButtonEventArgs e) {
            var fn = "Test.icv";
            using (var s = GetFileStream(fn))
                MainInkCanvas.Strokes = new StrokeCollection(s);
            Display("Loaded from " + fn);
        }

        private void MinimizeButton_MouseDown(object sender, MouseButtonEventArgs e) {
            this.WindowState = WindowState.Minimized;
        }

        private void ClearButton_MouseDown(object sender, MouseButtonEventArgs e) {
            MainInkCanvas.Strokes.Clear();
            Display("Cleared");
        }

        #region Drag
        private void StartDrag()
        {
            _lastMousePosition = Mouse.GetPosition(this);
            _isDraging = true;
            Palette.Background = new SolidColorBrush(Colors.Transparent);
        }

        private void EndDrag()
        {
            _isDraging = false;
            Palette.Background = null;
        }

        private void PaletteGrip_MouseDown(object sender, MouseButtonEventArgs e)
        {
            StartDrag();
        }

        private void Palette_MouseMove(object sender, MouseEventArgs e)
        {
            if (!_isDraging) return;
            var currentMousePosition = Mouse.GetPosition(this);
            var offset = currentMousePosition - _lastMousePosition;

            Canvas.SetTop(Palette, Canvas.GetTop(Palette) + offset.Y);
            Canvas.SetLeft(Palette, Canvas.GetLeft(Palette) + offset.X);

            _lastMousePosition = currentMousePosition;
        }

        private void Palette_MouseUp(object sender, MouseButtonEventArgs e)
        {
            EndDrag();
        }

        private void Palette_MouseLeave(object sender, MouseEventArgs e)
        {
            EndDrag();
        }
        #endregion

        
    }
}
