using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

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

        public MainWindow()
        {
            InitializeComponent();
            SelectColor(DefaultColor);
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
